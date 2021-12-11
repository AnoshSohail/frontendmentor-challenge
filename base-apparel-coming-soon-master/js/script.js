let emailInput = document.getElementById("emailID");
let btn = document.getElementById("button");
let errorMessage = document.querySelector(".errorMessage");
let errorIcon = document.querySelector(".errorIcon");

console.log(btn);
btn.addEventListener("click", () => {
  console.log("btn is clicked");
  let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-z]){2,7}$/;
  let str = emailInput.value;
  if (regex.test(str)) {
    alert("Done");
  } else {
    errorMessage.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
    emailInput.style.border = "solid 2px hsl(0, 93%, 68%)";
  }
});
