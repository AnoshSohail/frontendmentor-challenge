// let resetBtn = document.getElementById("resetBtn");
// let error = document.getElementById("error");
// let personNo = document.getElementById("personNo");
// let billInput = document.getElementById("billInput");
// let tipAmount = document.getElementById("tipAmount");
// let totalAmount = document.getElementById("totalAmount");
// let btn = document.getElementsByClassName("btn");
// let input = document.getElementsByTagName("input");
// // console.log(convertBtnVal);
// // console.log(parseInt(btn.value));
// resetBtn.addEventListener("click", () => {
//   document.getElementById("tipAmount").innerHTML = "$0.00";
//   document.getElementById("totalAmount").innerHTML = "$0.00";
//   document.getElementById("personNo").value = "";
//   document.getElementById("billInput").value = "";
// });
// let btnValue;
// let convertBtnVal;
// let tipValue = 0.15;
// // error message
// personNo.addEventListener("input", () => {
//   calculation();
// });
// function calculation() {
//   console.log("function working");
//   if (personNo.value >= 1) {
//     let amount =
//       (parseInt(document.getElementById("billInput").value) *
//         parseInt(document.getElementById("personNo").value)) /
//       tipValue;
//     console.log(amount);

//     document.getElementById("tipAmount").textContent = "$" + amount.toFixed(2);
//     document.getElementById("error").innerHTML = "";
//     return amount;
//   } else if (personNo.value == 0) {
//     document.getElementById("error").innerHTML = "Can't be zero";
//     document.getElementById("personNo").style.outlineColor = "red";
//   }
// }

// // Array.from(btn).forEach((button) => {
// //   button.addEventListener("click", (e) => {
// //     btnValue = e.target.value;
// //     console.log(btnValue);
// //     convertBtnVal = btnValue / 100;
// //     console.log(convertBtnVal);
// //   });
// // });
// Array.from(btn).forEach(function (val) {
//   val.addEventListener("click", handleClick);
// });
// function handleClick(event) {
//   Array.from(btn).forEach(function (val) {
//     if (event.target.innerHTML == val.innerHTML) {
//       tipValue = parseFloat(val.innerHTML) / 100;
//       console.log(tipValue);
//     }
//   });
// }

let resetBtn = document.getElementById("resetBtn");
let error = document.getElementById("error");
let personNo = document.getElementById("personNo");
let billInput = document.getElementById("billInput");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let btn = document.getElementsByClassName("btn");
let customInput = document.getElementById("custom");
let billValue = 0.0;
let personValue = 1;
let tipValue = 0.15;
let amount;
billInput.addEventListener("input", billFunction);
personNo.addEventListener("input", personFunction);
customInput.addEventListener("input", customVal);
Array.from(btn).forEach(function (val) {
  val.addEventListener("click", handleClick);
});
function handleClick(event) {
  Array.from(btn).forEach(function (val) {
    if (event.target.innerHTML == val.innerHTML) {
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  tip();
}

function billFunction() {
  billValue = parseFloat(billInput.value);
  tip();
}
function customVal() {
  tipValue = parseFloat(customInput.value) / 100;
  tip();
}
function personFunction() {
  personValue = parseFloat(personNo.value);
  if (personValue < 1) {
    document.getElementById("error").innerHTML = "Can't be zero";
    document.getElementById("personNo").style.outlineColor = "red";
  } else {
    document.getElementById("personNo").style.outlineColor =
      "hsl(172, 67%, 45%)";
    document.getElementById("error").innerHTML = "";
    tip();
  }
}
function tip() {
  if (personValue >= 1) {
    amount = (billValue * tipValue) / personValue;
    let total = (billValue + amount) / personValue;
    tipAmount.innerHTML = "$" + amount.toFixed(2);
    totalAmount.innerHTML = "$" + total.toFixed(2);
  }
}
resetBtn.addEventListener("click", () => {
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  personNo.value = "";
  billInput.value = "";
  customInput.value = "";
  error.innerHTML = "";
});
