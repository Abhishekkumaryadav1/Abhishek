function myfunction1() {
  var elms = document.getElementsByClassName("viewall");
  var btnText = document.getElementById("view");
  Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "table-row";
      btnText.innerHTML = "View Less";
    } else {
      x.style.display = "none";
      btnText.innerHTML = "View All";
    }
  });
}
function myfunction2() {
  var elms = document.getElementsByClassName("table2");
  var btnText = document.getElementById("view2");
  Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "table-row";
      btnText.innerHTML = "View Less";
    } else {
      x.style.display = "none";
      btnText.innerHTML = "View All";
    }
  });
}
