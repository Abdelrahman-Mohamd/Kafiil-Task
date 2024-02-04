const avatar = document.querySelector(".avatar-items");
const avatarPopup = document.querySelector(".navbar-popup");

function togglePopup() {
  if (
    avatarPopup.style.display === "none" ||
    avatarPopup.style.display === ""
  ) {
    avatarPopup.style.display = "block";
  } else {
    avatarPopup.style.display = "none";
  }
}

avatar.addEventListener("click", togglePopup);
