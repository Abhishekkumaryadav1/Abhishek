$(document).ready(function () {
  let table = $("#dataTable").DataTable({
    ajax: "objects.txt",
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "dob" },
      { data: "email" },
      { data: "address" },
    ],
  });

   count = 6;

  $("#submitbtn").click(function () {
    firstName=$("#Fname").val();
    lastName = $("#name").val();
    dob = $("#dob").val();
    email = $("#emails").val();
    address = $("#address").val();
    if(ValidateForm()){
       
    table.row
      .add({
        id: count,
        name: firstName+" "+lastName,
        dob: dob,
        email: email,
        address: address,
      })
      .draw();
    count++;
  
    let  clear= document.getElementById('resetForm');
    clear.reset();
     $("#staticBackdrop").modal('hide');
    }
   
  });
   
});


function ValidateForm(){

     let fname = document.forms["myForm"]["fname"].value;
    let name = document.forms["myForm"]["name"].value;
    var emailx = document.myForm.emails.value;
    var atposition = emailx.indexOf("@");
    var dotposition = emailx.lastIndexOf(".");
  
    //  Regular expression of form validation.
     var fnameValidation = /^[A-Za-z]+$/;
     var nameValidation = /^[A-Za-z]+$/;
  
    let flag = true;
  
  
    if (
      fname == "" ||
      !fnameValidation.test(fname)
    ) {
      document.getElementById("fnameerror").innerHTML =
        "<i>Firstname Invalid</i>";
      flag = false;
    } else {
      document.getElementById("fnameerror").innerHTML = "";
    }

    if (
        lastName == "" ||
      !nameValidation.test(name)
    ) {
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
  
 return flag;
}