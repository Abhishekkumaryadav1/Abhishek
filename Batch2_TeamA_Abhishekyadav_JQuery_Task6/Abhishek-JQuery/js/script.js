var ObjectArr = [];
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
  $("#AddDetailsBtn").on("click", function () {
    $("#submitbtn").show();
    $("#updatebtn").hide();

    let clearall = document.getElementById("resetForm");
    clearall.reset();
    $("#staticBackdrop").modal("hide");
  });
  var table = $("#datatable").DataTable({
    data: ObjectArr,
    columns: [
      {
        className: "dt-control",
        orderable: false,
        data: null,
        defaultContent: "",
      },
      { data: "id" },
      { data: "firstname" },
      { data: "lastname" },
      { data: "dob" },
      { data: "email" },
      { data: "address" },
      {
        mData: null,

        bSortable: false,
        mRender: function (o) {
          return (
            `<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class=" bg-primary custom-btn btn-3 btnAction m-1" id="editId` +
            o.id +
            `" onclick="showHide();editBtn(${o.id})">
        Edit
      </button>
      <button class="bg-success custom-btn btn-3 btnAction m-1 btn-delete" id="deleteId` +
            o.id +
            `" onclick="deleteBtn(${o.id})">
        Delete
      </button>`
          );
        },
      },
    ],
    order: [[1, "asc"]],
  });

  count = 6;

  $("#submitbtn").click(function () {
    var check = ValidateForm();
    if (check) {
      table.row
        .add({
          id: check.id,
          firstname: check.firstname,
          lastname: check.lastname,
          dob: check.dob,
          email: check.email,
          address: check.address,
          education: check.education,
        })
        .draw(false);
      ObjectArr.push({
        id: check.id,
        firstname: check.firstname,
        lastname: check.lastname,
        dob: check.dob,
        email: check.email,
        address: check.address,
        education: check.education
      })
      count++;
      console.log(ObjectArr);
      
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
    //  Show confirmation dialog for Delete row

    if (confirm("Are you sure you want to delete this row?")) {
      // to Delete The row and array objects from array
      table.row(row).remove().draw();
      if (objWith > -1) {
        ObjectArr.splice(objWithIdIndex, 1);
        $("#datatable")
          .DataTable()
          .row($(jValue).parents("tr"))
          .remove()
          .draw();
      }
    }
  });
});

function ValidateForm() {
  let fname = document.forms["myForm"]["Fname"].value;
  let lname = document.forms["myForm"]["lname"].value;
  var dob = document.getElementById("dob").value;
  var emailx = document.myForm.emails.value;
  var atposition = emailx.indexOf("@");
  var dotposition = emailx.lastIndexOf(".");
  var address = document.getElementById("address").value;
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

  var PushArray = [];
  edid = 1;
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
        educationId: edid,
        degree: degree.value,
        college: institutename.value,
        startDate: startdate.value,
        passOutYear: passout.value,
        percentage: percentage.value,
        backlog: backlog.value,
      };

      PushArray.push(educationdetails);
      edid += 1;
      let style = document.createElement("style");
      style.innerHTML = `
       .error{
           font-size:15px;
           animation: shake 1000ms;
       }`;

      document.head.appendChild(style);
    }
  }

  let formDetails = {
    id: count,
    firstname: fname,
    lastname: lname,
    dob: dob,
    email: emailx,
    address: address,
    education: PushArray,
  };
  //  ObjectArr.push(formDetails);
  if (flag == true) {
    return formDetails;
  }

}

const addBtn = document.querySelector(".add");
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
                            <option value="B.Tech">B.Tech</option>
                            <option value="Pharamacy">Pharamacy</option>
                            <option value="Diploma">Diploma</option>
                            <option value="12TH">12TH</option>
                            <option value="10TH">10TH</option>
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

  // input.appendChild(div);
  document.getElementById("row-detail").appendChild(div);
  a += 1;
}
addBtn.addEventListener("click", addUser);

function Delete(e) {
  e.parentNode.parentNode.remove();
}

function showHide() {
  document.getElementById("submitbtn").style.display = "none";
  document.getElementById("updatebtn").style.display = "block";
}

var objWith;
var jValue;
function deleteBtn(k, j) {
  objWith = ObjectArr.findIndex((obj) => obj.id === k);
  jValue = j;
}

//To Hide the Inner Html on  the edit button click
function HideError() {
  document.getElementById("fnameerror").innerHTML = "";
  document.getElementById("nameerror").innerHTML = "";
  document.getElementById("doberror").innerHTML = "";
  document.getElementById("emailerror").innerHTML = "";
  document.getElementById("addresserror").innerHTML = "";
  
  for (let i = 0; i <= a; i++) {
    document.getElementById(`degreerror${i}`).innerHTML = "";
    document.getElementById(`insterror${i}`).innerHTML = "";
    document.getElementById(`startdateerror${i}`).innerHTML = "";
    document.getElementById(`passouterror${i}`).innerHTML = "";
    document.getElementById(`percentageerror${i}`).innerHTML = "";
    document.getElementById(`backlogerror${i}`).innerHTML = "";
  }

  document.getElementById("resetForm").reset();

}

//To Fetch the data into the Input Field
var updateIndex, objWithIdIndex;
function editBtn(k) {
  updateIndex = k;
  objWithIdIndex = ObjectArr.findIndex((obj) => obj.id == k);
  if (objWithIdIndex > -1) {
    fiName = ObjectArr[objWithIdIndex].firstname;
    laName = ObjectArr[objWithIdIndex].lastname;
    DateOfBirth = new Date(ObjectArr[objWithIdIndex].dob);

    DateOfYear = DateOfBirth.getFullYear();
    DateOfMonth = (DateOfBirth.getMonth() + 1).toString().padStart(2, 0);
    DateOfDay = DateOfBirth.getDate().toString().padStart(2, 0);

    getEmail = ObjectArr[objWithIdIndex].email;
    getAddress = ObjectArr[objWithIdIndex].address;
    getEducation = ObjectArr[objWithIdIndex].education;

    document.getElementById("Fname").value = fiName;
    document.getElementById("lname").value = laName;
    document.getElementById("dob").value = `${DateOfYear}-${DateOfMonth}-${DateOfDay}`;
    document.getElementById("emails").value = getEmail;
    document.getElementById("address").value = getAddress;

    document.getElementById("row-detail").innerHTML = null

    for (objr of getEducation) {
      a = 2;
      if (objr.educationId > 2) {
        addUser()
      }
      k = objr.educationId - 1;

      StartDate = new Date(objr.startDate);
      StartDateYear = StartDate.getFullYear();
      StartDateMonth = (StartDate.getMonth() + 1).toString().padStart(2, 0); //Months are started from 0 i.e. +1 used

      StartDatey = new Date(objr.passOutYear);
      StartDateYe = StartDatey.getFullYear();
      StartDates = (StartDatey.getMonth() + 1).toString().padStart(2, 0);

      document.getElementById(`degree${k}`).value = objr.degree;
      document.getElementById(`institutename${k}`).value = objr.college;
      document.getElementById(`startdate${k}`
      ).value = `${StartDateYear}-${StartDateMonth}`;
      document.getElementById(`passout${k}`
      ).value = `${StartDateYe}-${StartDates}`;
      document.getElementById(`percentage${k}`).value = objr.percentage;
      document.getElementById(`backlog${k}`).value = objr.backlog;
    }
  }
}

//For Updating the value on the Input Field
function updateData() {

  let validupdate = ValidateForm();
  let updateDetails = {};
  if (validupdate) {
    updateDetails = {
      id: updateIndex,
      firstname: validupdate.firstname,
      lastname: validupdate.lastname,
      dob: validupdate.dob,
      email: validupdate.email,
      address: validupdate.address,
      education: validupdate.education,
    };
    ObjectArr[objWithIdIndex] = updateDetails;
    $("#datatable").DataTable().clear().rows.add(ObjectArr).draw();
  }
  $("#staticBackdrop").modal("hide");
  alert("Form Updated")
}
