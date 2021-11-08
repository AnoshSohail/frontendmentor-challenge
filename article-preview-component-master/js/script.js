const shareBtn = document.querySelector(".share_btn");
const shareIcons = document.querySelector(".share_activated");

shareBtn.addEventListener("click", function () {
  shareIcons.classList.toggle("active");
});
