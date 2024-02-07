const avatar = document.querySelector(".avatar");
const avatarPopup = document.querySelector(".navbar-popup");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerNavItems = document.querySelector(".hamburger-nav-bar");
const xIcon = document.querySelector(".x-icon");
const heartIcons = document.querySelectorAll(".fa-heart");

function togglePopup() {
  if (
    avatarPopup.style.display === "none" ||
    avatarPopup.style.display === ""
  ) {
    avatarPopup.style.display = "block";
    hamburgerNavItems.style.display = "none";
  } else {
    avatarPopup.style.display = "none";
  }
}

function toggleHamburgerNavItems() {
  if (
    hamburgerNavItems.style.display === "none" ||
    hamburgerNavItems.style.display === ""
  ) {
    hamburgerNavItems.style.display = "block";
    avatarPopup.style.display = "none";
  } else {
    hamburgerNavItems.style.display = "none";
  }
}

hamburgerNavItems.style.display = "none";

avatar.addEventListener("click", togglePopup);

window.addEventListener("click", (event) => {
  if (
    !avatar.contains(event.target) &&
    !avatarPopup.contains(event.target) &&
    !hamburgerIcon.contains(event.target) &&
    !hamburgerNavItems.contains(event.target)
  ) {
    avatarPopup.style.display = "none";
    hamburgerNavItems.style.display = "none";
  }
});

hamburgerIcon.addEventListener("click", toggleHamburgerNavItems);

xIcon.addEventListener("click", () => {
  hamburgerNavItems.style.display = "none";
});
window.addEventListener("resize", () => {
  hamburgerNavItems.style.display = "none";
});

function toggleHeartIcon(event) {
  const heartIcon = event.currentTarget;
  heartIcon.classList.toggle("fa-solid");
  heartIcon.classList.toggle("fa-regular");
  heartIcon.style.color = heartIcon.classList.contains("fa-solid")
    ? "#ff5353"
    : "";
}

heartIcons.forEach((icon) => {
  icon.addEventListener("click", toggleHeartIcon);
});
