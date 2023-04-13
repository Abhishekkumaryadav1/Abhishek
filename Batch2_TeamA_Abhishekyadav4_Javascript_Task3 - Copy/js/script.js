// put the class name into the variable
const addBtn = document.querySelector(".add");
//    put the whole form into the variable
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
// add the eventlistner on button for click call
addBtn.addEventListener("click", addUser);
//    passing the variable to remove parentnode
function Delete(e) {
  e.parentNode.parentNode.remove();
}

// to create a function and get the element by ID

function callValue(event) {
  event.preventDefault();

  var firstname = document.getElementById("Fname");
  var lastname = document.getElementById("lname");
  var dateofbirth = document.getElementById("dob");
  var emailid = document.getElementById("emails");
  var address = document.getElementById("address");

  // Validation Form

  let fname = document.forms["myForm"]["fname"].value;
  let lname = document.forms["myForm"]["lname"].value;
  var emailx = document.myForm.emails.value;
  var atposition = emailx.indexOf("@");
  var dotposition = emailx.lastIndexOf(".");

  // Regular expression of form validation.
  var fnameValidation = /^[A-Za-z]+$/;
  var lnameValidation = /^[A-Za-z]+$/;

  let flag = true;


  if (
    firstname.value == "" ||
    !fnameValidation.test(fname) ||
    firstname.value.length < 3
  ) {
    document.getElementById("fnameerror").innerHTML =
      "<i>FirstName Invalid</i>";
    flag = false;
  } else {
    document.getElementById("fnameerror").innerHTML = "";
  }
  if (
    lastname.value == "" ||
    !lnameValidation.test(lname) ||
    lastname.value.length < 3
  ) {
    document.getElementById("lnameerror").innerHTML = "<i>LastName Invalid</>";
    flag = false;
  } else {
    document.getElementById("lnameerror").innerHTML = "";
  }

  if (dateofbirth.value == "") {
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
  if (address.value == "") {
    document.getElementById("addresserror").innerHTML =
      "<i>Address Invalid</i>";
    flag = false;
  } else {
    document.getElementById("addresserror").innerHTML = "";
  }



  let secondrow = document.querySelectorAll("#second-row .row").length;

  var array = [];

  let arrEdu = []
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
        selectDegree: degree.value,
        instituteName: institutename.value,
        startDate: startdate.value,
        passoutYear: passout.value,
        percentage: percentage.value,
        backlogs: backlog.value,
      };

      arrEdu.push(educationdetails)

      // document.head.removeChild(style)
      let style = document.createElement("style");
      style.innerHTML = `
        .error{
            font-size:15px;
            animation: shake 1000ms;
        }`;

      document.head.appendChild(style);

      array.push(educationdetails); //push the educationdetails into array
    }
  }


  
  let formDetails = {
     id:n,
    firstName: firstname.value,
    lastName: lastname.value,
    DateofBirth: dateofbirth.value,
    Emails: emailid.value,
    address: address.value,
    edution: arrEdu
  };


  if (flag == true) {
    // console.log(formDetails);
    // alert("Form Submitted Sucessfully");

    var addRown=document.getElementById("show")
    var NewRow=addRown.insertRow(n);

    var data1=NewRow.insertCell(0);
    var data2=NewRow.insertCell(1);
    var data3=NewRow.insertCell(2);
    var data4=NewRow.insertCell(3);
    var data5=NewRow.insertCell(4);
    var data6=NewRow.insertCell(5);


    data1.innerHTML=firstname.value;
    data2.innerHTML=lastname.value;
    data3.innerHTML=dateofbirth.value;
    data4.innerHTML=emailid.value;
    data5.innerHTML=address.value;
    data6.innerHTML=`<button class="btn-lg bg-info edit" onclick="callId(${n})">Edit</button> <button class="btn-lg bg-info float-end">View</button>`

    //  data1(n).innerHTML=firstname

    n++;
    




    document.getElementById("submitbutton1").reset();
    
    
   
  }
 
   
  
    }
    var n=1;
    function callId(n){
      alert("This Is the  "+n+ " Id");
    }
 

   
     
  
   





