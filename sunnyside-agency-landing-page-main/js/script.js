let button = document.getElementById("button");
let linksContainer = document.getElementById("linksContainer");
button.addEventListener("click", () => {
  linksContainer.style.display = "block";
  console.log("working");
});
