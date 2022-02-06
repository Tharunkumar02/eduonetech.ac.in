let signUppwd = document.querySelector("[data-signup-pwd]"),
  closeButton = document.querySelector("[data-close-button]"),
  inputName = document.getElementById("input-name"),
  inputPassword = document.getElementById("input-password"),
  firstName = document.querySelector("[data-first-name]"),
  lastName = document.querySelector("[data-last-name]");

$(".container2").hide();
$(".container3").hide();
$("#contain").hide();
$(".container4").hide();
$(".container5").hide();

$(document).ready(function () {
  $("#login").click(function () {
    $(".container2").toggle();
  });
});

$(document).ready(function () {
  $("#signup").click(function () {
    $(".container3").toggle();
  });
});

$(document).ready(function () {
  $(".close").click(function () {
    $(".container2").hide();
  });
});

$(document).ready(function () {
  $(".close").click(function () {
    $(".container3").hide();
  });
});

document
  .getElementsByClassName("sign-in")[0]
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (inputName.value != "" || inputPassword.value != "") {
      $(".sign-in").click(function () {
        $(".container2").hide();
        $(".container4").show();
      });
    } else {
      alert("Please fill all the fields");
    }
  });

document
  .getElementsByClassName("sign-up")[0]
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (inputName.value != "" || inputPassword.value != "" || firstName.value != "" || lastName.value != "") {
      $(".sign-up").click(function () {
        $(".container3").hide();
        $(".container5").show();
      });
    } else {
      alert("Please fill all the fields");
    }
  });

signUppwd.addEventListener("focus", () => {
  $("#contain").show();
});
