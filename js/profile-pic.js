$(document).ready(function () {
  $("#toggleButton").hide();
  $("#toggleButton").on("click", function () {
    //check if the user is in index.html page, if so redirect the user to redesign.html and vise versa
    if (window.location.pathname.includes("index.html")) {
      window.location.href = "redesign.html";
    } else {
      window.location.href = "index.html";
    }
  });
});
