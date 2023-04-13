
// let table=null;
function format(d) {
  // `d` is the original data object for the row
  var AddTable = `
      <table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">
      <tr>
      <th>Education</th>
      <th>Degree</th>
      <th>Institute Name</th>
      <th>Start Date</th>
      <th>Passout Year</th>
      <th>Percntage</th>
      <th>Backlogs</th>
      </tr>`;
  for (crcl of d.education) {
    AddTable += `
      <tr>
          <td></td>
          <td>${crcl.degree}</td>
          <td>${crcl.college}</td>
          <td>${crcl.startDate}</td>
          <td>${crcl.passOutYear}</td>
          <td>${crcl.percentage}</td>
          <td>${crcl.backlog}</td>    
      </tr>`;
  }
  return AddTable;
}
$(document).ready(function () {
  var table = $("#datatable").DataTable({
    ajax: "studentdata.json",
    columns: [
      {
        className: "dt-control",
        orderable: false,
        data: null,
        defaultContent: "",
      },
      { data: "id" },
      { data: "name" },
      { data: "dob" },
      { data: "email" },
      { data: "address" },
      {
        "mData": null,
        "bSortable": false,
        "mRender": function (o) {
          return `<button  data-bs-toggle="modal" data-bs-target="#staticBackdrop" class=" bg-primary custom-btn btn-3 btnAction m-1" id="editBtn` + o.id + `" onclick="editBtn(this)">Edit
       </button>
      <button class=" bg-primary custom-btn btn-3 btnAction m-1" id="deleteBtn` + o.id + `" onclick="deleteBtn(this)">Delete
      </button>`
            ;
        }
      }
    ],
    order: [[1, "asc"]],
  });

  count = 6;

  $("#submitbtn").click(function () {
    firstName = $("#Fname").val();
    lastName = $("#name").val();
    dob = $("#dob").val();
    email = $("#emails").val();
    address = $("#address").val();

    var check = ValidateForm();
    if (check) {
      table.row
        .add({
          id: count,
          name: firstName + " " + lastName,
          dob: dob,
          email: email,
          address: address,
          education: check,
        })
        .draw();
      count++;

      let clear = document.getElementById("resetForm");
      clear.reset();
      $("#staticBackdrop").modal("hide");
    }
  });

  // Add event listener for opening and closing details
  $("#datatable tbody").on("click", "td.dt-control", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });

  var table = $("#datatable").DataTable();

  // Remove particular row from DataTable

  $("#datatable tbody").on("click", ".btn-delete", function () {
    // Get row to be deleted

    var row = $(this).closest("tr");
    // Show confirmation dialog for Delete row

    if (confirm("Are you sure you want to delete this row?")) {
      table.row(row).remove().draw();
    }
  });
});

function ValidateForm() {
  let fname = document.forms["myForm"]["fname"].value;
  let lname = document.forms["myForm"]["name"].value;
  var emailx = document.myForm.emails.value;
  var atposition = emailx.indexOf("@");
  var dotposition = emailx.lastIndexOf(".");

  //  Regular expression of form validation.
  var fnameValidation = /^[A-Za-z]+$/;
  var nameValidation = /^[A-Za-z]+$/;

  let flag = true;

  if (fname == "" || !fnameValidation.test(fname)) {
    document.getElementById("fnameerror").innerHTML =
      "<i>Firstname Invalid</i>";
    flag = false;
  } else {
    document.getElementById("fnameerror").innerHTML = "";
  }

  if (lname == "" || !nameValidation.test(lname)) {
    document.getElementById("nameerror").innerHTML = "<i>Lastname Invalid</>";
    flag = false;
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }

  if (dob == "") {
    document.getElementById("doberror").innerHTML =
      "<i>Select Date of Birth<i>";
    flag = false;
  } else {
    document.getElementById("doberror").innerHTML = "";
  }
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= emailx.length
  ) {
    document.getElementById("emailerror").innerHTML = "<i>Email Invalid</i>";
    flag = false;
  } else {
    document.getElementById("emailerror").innerHTML = "";
  }
  if (address == "") {
    document.getElementById("addresserror").innerHTML =
      "<i>Address Invalid</i>";
    flag = false;
  } else {
    document.getElementById("addresserror").innerHTML = "";
  }

  let secondrow = document.querySelectorAll("#second-row .row").length;

  // const array = [];

  // let arrEdu = [];
  var PushArray = [];
  for (let i = 0; i <= a; i++) {
    var degree = document.getElementById(`degree${i}`);
    var institutename = document.getElementById(`institutename${i}`);
    var startdate = document.getElementById(`startdate${i}`);
    var passout = document.getElementById(`passout${i}`);
    var percentage = document.getElementById(`percentage${i}`);
    var backlog = document.getElementById(`backlog${i}`);

    if (document.getElementById(`institutename${i}`)) {
      if (degree.value == "") {
        document.getElementById(`degreerror${i}`).innerHTML =
          "<i>Please slect type</i>";
        degree.focus();
        flag = false;
      } else {
        document.getElementById(`degreerror${i}`).innerHTML = "";
      }

      if (institutename.value == "") {
        document.getElementById(`insterror${i}`).innerHTML =
          "<i>Enter InstuiteName</i>";
        institutename.focus();
        flag = false;
      } else {
        document.getElementById(`insterror${i}`).innerHTML = "";
      }

      if (startdate.value == "") {
        document.getElementById(`startdateerror${i}`).innerHTML =
          "<i>Enter StartDate</i>";
        startdate.focus();
        flag = false;
      } else {
        document.getElementById(`startdateerror${i}`).innerHTML = "";
      }

      if (passout.value == "") {
        document.getElementById(`passouterror${i}`).innerHTML =
          "<i>Enter PassoutDate</i>";
        passout.focus();
        flag = false;
      } else {
        document.getElementById(`passouterror${i}`).innerHTML = "";
      }

      if (percentage.value == "") {
        document.getElementById(`percentageerror${i}`).innerHTML =
          "<i>Enter Percentage</i>";
        percentage.focus();
        flag = false;
      } else {
        document.getElementById(`percentageerror${i}`).innerHTML = "";
      }

      if (backlog.value == "") {
        document.getElementById(`backlogerror${i}`).innerHTML =
          "<i>Enter Backlog</i>";
        backlog.focus();
        flag = false;
      } else {
        document.getElementById(`backlogerror${i}`).innerHTML = "";
      }


      let educationdetails = {
        degree: degree.value,
        college: institutename.value,
        startDate: startdate.value,
        passOutYear: passout.value,
        percentage: percentage.value,
        backlog: backlog.value,
      };

      PushArray.push(educationdetails);
      // console.log(arrEdu)

      // document.head.removeChild(style)
      let style = document.createElement("style");
      style.innerHTML = `
       .error{
           font-size:15px;
           animation: shake 1000ms;
       }`;

      document.head.appendChild(style);


    }
  }

  if (flag == true) {
    return PushArray;
  }

}

const addBtn = document.querySelector(".add");
// const addBtn2=document.querySelector(".add2");
const input = document.querySelector(".parentform");

let a = 2;
function addUser() {
  let div = document.createElement("div");
  div.className = "row mt-5";

  div.innerHTML = `
                    <div class="col-6 mb-2 col-md-1 ">
                    <label for="exampleInputDegree" class="mb-2 mb-md-0 mediaquery">Degree</label>
                        <select class="form-select " id="degree${a}"aria-label="Default select example">
                            <option value="" selected>Select</option>
                            <option value="1">B.Tech</option>
                            <option value="2">Pharamacy</option>
                            <option value="3">Diploma</option>
                            <option value="3">12TH</option>
                            <option value="3">10TH</option>
                          </select>
                          <div id="degreerror${a}" class="error"></div>
                    </div>
                    <div class="col-6 mb-2 col-md-2 ">
                    <label for="exampleInputSchoolCollege" class="mb-2 mb-md-0 mediaquery ">Institute Name</label>
                        <input type="text" class="form-control  " id="institutename${a}" placeholder="Institute Name" required >
                        <div id="insterror${a}"  class="error"></div>
                    </div>
                    <div class="col-6 mb-2 col-md-2 ">
                    <label for="exampleInputStartedYear" class="mb-2 mb-md-0 mediaquery">Started Date</label>
                        <input type="month"  class="form-control " id="startdate${a}" required >
                        <div id="startdateerror${a}" class="error"></div>
                    </div>
                    <div class="col-6 mb-2 col-md-2 "> 
                    <label for="exampleInputPassoutYear" class="mb-2 mb-md-0 mediaquery">Passout Year</label>
                        <input type="month" class="passout form-control " id="passout${a}"  required  >
                        <div id="passouterror${a}" class="error"></div>
                    </div>
                    <div class="col-6 mb-2 col-md-2 ">
                    <label for="exampleInputPercentage" class="mb-2 mb-md-0 mediaquery">Percentage</label>
                        <input type="number" class="form-control  " id="percentage${a}" placeholder="Do Not Write %" min="0" required >
                        <div id="percentageerror${a}" class="error"></div>
                    </div>
                    <div class="col-6 mb-2 col-md-1 ">  
                    <label for="exampleInputBacklogs" class="mb-2 mb-md-0 backlog mediaquery">Backlogs</label>    
                        <input type="number" class="form-control " id="backlog${a}" min="0" placeholder="If Any" required >
                         <div id="backlogerror${a}" class="error"></div>
                    </div>
                     <div class="col-12 col-md-2 mb-md-2 d-flex align-items-center justify-content-center">
                        <button class=" btn btn-success float-end" onclick="Delete(this);" id="deletehover">Delete</button>
                     </div>
                    `;

  input.appendChild(div);
  a += 1;
}
addBtn.addEventListener("click", addUser);
// addBtn2.addEventListener("click", addUser);

function Delete(e) {
  e.parentNode.parentNode.remove();
}

function editBtn(editBtn) {
  alert("This is " + (editBtn.id).slice(7) + " Id");
}
function deleteBtn(c) {
  alert("This is " + (c.id).slice(9) + " Id");
}