const avatar = document.querySelector(".avatar");
const avatarPopup = document.querySelector(".user-popup");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerNavBar = document.querySelector(".hamburger-navbar");
const cancelHamburgerIcon = document.querySelector(".cancel-hamburger-icon");
const heartIcons = document.querySelectorAll(".fa-heart");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const finalPrice = document.querySelector(".final-price");
const numberOfItems = document.querySelector(".number");

let price = parseFloat(finalPrice.textContent.replace("$", ""));
let items = parseInt(numberOfItems.textContent);

function decrementPrice() {
  if (price > 0 && items > 0) {
    price -= 100;
    items--;
    updatePrice();
    updateNumberOfItems();
  }
}

function incrementPrice() {
  price += 100;
  items++;
  updatePrice();
  updateNumberOfItems();
}

function updatePrice() {
  finalPrice.textContent = "$" + price.toFixed(2);
}

function updateNumberOfItems() {
  numberOfItems.textContent = items;
}

minus.addEventListener("click", () => {
  decrementPrice();
});

plus.addEventListener("click", () => {
  incrementPrice();
});

function togglePopup() {
  if (
    avatarPopup.style.display === "none" ||
    avatarPopup.style.display === ""
  ) {
    avatarPopup.style.display = "flex";
    hamburgerNavBar.style.display = "none";
  } else {
    avatarPopup.style.display = "none";
  }
}

function toggleHamburgerNavbar() {
  if (
    hamburgerNavBar.style.display === "none" ||
    hamburgerNavBar.style.display === ""
  ) {
    hamburgerNavBar.style.display = "block";
    avatarPopup.style.display = "none";
  } else {
    hamburgerNavBar.style.display = "none";
  }
}

hamburgerNavBar.style.display = "none";

avatar.addEventListener("click", togglePopup);

window.addEventListener("click", (event) => {
  if (
    !avatar.contains(event.target) &&
    !avatarPopup.contains(event.target) &&
    !hamburgerIcon.contains(event.target) &&
    !hamburgerNavBar.contains(event.target)
  ) {
    avatarPopup.style.display = "none";
    hamburgerNavBar.style.display = "none";
  }
});

hamburgerIcon.addEventListener("click", toggleHamburgerNavbar);

cancelHamburgerIcon.addEventListener("click", () => {
  hamburgerNavBar.style.display = "none";
});
window.addEventListener("resize", () => {
  hamburgerNavBar.style.display = "none";
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
