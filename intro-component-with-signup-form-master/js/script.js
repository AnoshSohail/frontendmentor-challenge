function validation() {
  let input = document.querySelector("form input");
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let fName_errorIcon = document.querySelector(".fName-errorIcon");
  let lName_errorIcon = document.querySelector(".lName-errorIcon");
  let email_errorIcon = document.querySelector(".email-errorIcon");
  let password_errorIcon = document.querySelector(".password-errorIcon");
  // let fName_errorIcon = document.querySelector(".fName-errorIcon");
  let regex =
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z0-9a-zA-Z]+)\.([a-zA-z]){2,7}$/;
  let str = email;
  if (fName == "") {
    document.getElementById("firstName-error").innerHTML =
      "First Name cannot be empty";
    document.getElementById("fName").style.border =
      "2px solid hsl(0, 100%, 74%)";
    fName_errorIcon.style.visibility = "visible";
    // document.getElementById("icon").classList.add("errorIcon");
  }
  if (lName == "") {
    document.getElementById("lastName-error").innerHTML =
      "Last Name cannot be empty";
    document.getElementById("lName").style.border =
      "2px solid hsl(0, 100%, 74%)";
    // document.getElementById("icon").classList.add("errorIcon");
    lName_errorIcon.style.visibility = "visible";
  }
  if (!regex.test(str)) {
    document.getElementById("email-error").innerHTML =
      "Looks like this is not an email";
    document.getElementById("email").style.border =
      "2px solid hsl(0, 100%, 74%)";
    document.getElementById("email").style.color = " hsl(0, 100%, 74%)";
    document.getElementById("email").style.fontWeight = "600";
    email_errorIcon.style.visibility = "visible";
  }
  if (password == "") {
    document.getElementById("password-error").innerHTML =
      "password cannot be empty";
    document.getElementById("password").style.border =
      "2px solid hsl(0, 100%, 74%)";
    password_errorIcon.style.visibility = "visible";
  } else {
    alert("done");
  }
  return false;
}
