function validation() {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let regex =
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z0-9a-zA-Z]+)\.([a-zA-z]){2,7}$/;
  let str = email;
  if (fName == "") {
    document.getElementById("firstName-error").innerHTML =
      "First Name cannot be empty";
    document.getElementById("fName").style.border =
      "2px solid hsl(0, 100%, 74%)";
    document.getElementById("fName").classList.add("errorIcon");
  }
  if (lName == "") {
    document.getElementById("lastName-error").innerHTML =
      "Last Name cannot be empty";
    document.getElementById("lName").style.border =
      "2px solid hsl(0, 100%, 74%)";
    // document.getElementById("lName").classList.add("errorIcon");
  }
  if (!regex.test(str)) {
    document.getElementById("email-error").innerHTML =
      "Looks like this is not an email";
    document.getElementById("email").style.border =
      "2px solid hsl(0, 100%, 74%)";
    document.getElementById("email").style.color = " hsl(0, 100%, 74%)";
    document.getElementById("email").style.fontWeight = "600";
    // document.getElementById("email").classList.add("errorIcon");
  }
  if (password == "") {
    document.getElementById("password-error").innerHTML =
      "password cannot be empty";
    document.getElementById("password").style.border =
      "2px solid hsl(0, 100%, 74%)";
    // document.getElementById("password").classList.add("errorIcon");
  }
  return false;
}
