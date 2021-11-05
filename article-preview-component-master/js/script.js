/* const social = document.querySelector(" .share_activated");
const shareBtn = document.getElementById("shareBtn_activated");
const remove_share = document.querySelector(".share_btn");

shareBtn.addEventListener("click", () => {
  social.classList.add("clicked");
});

remove_share.addEventListener("click", () => {
  social.classList.remove("clicked");
});
 */

// function btn_activated() {
//   var x = document.getElementById("shareBtn_activated");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function myFunction() {
//   var shareclick = document.getElementById("share_activated");
//   shareclick.classList.toggle("show");
// }

// const share = document.querySelector(".share_btn");

// const popup = document.querySelector(".share_activated");

// share.onclick = () => {
//   popup.classList.toggle("show");
//   share.classList.toggle("ontop");
// };

/* document.getElementById("testID").addEventListener("click", testClass);
function testClass() {
  document.getElementById("testID").classList.toggle("abc");
}

document.getElementById("myDiv").addEventListener("click", user);
function share_btn() {
  document.getElementById("myDiv").classList.toggle("share_activated");
}
 */

const shareBtn = document.querySelector(".share_btn");
const shareIcons = document.querySelector(".share_activated");

shareBtn.addEventListener("click", function () {
  shareIcons.classList.toggle("active");
});
