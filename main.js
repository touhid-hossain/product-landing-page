// variables from dom
const menuBtn = document.querySelector(".menu-btn");
const backBtnTop = document.getElementById("mastercraft_btn");
const navMenu = document.getElementById("navMenu");
const bookMark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".bookmark-text");
const modal = document.querySelector(".modal-outer");
const closeBtn = document.querySelector(".close_Btn");

let menuOpen = false;
let modalPage = false;

// toggle hamburger menu
menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    menuOpen = true;
    menuBtn.classList.add("open");
    navMenu.classList.add("navbar_active");
  } else {
    menuOpen = false;
    menuBtn.classList.remove("open");
    navMenu.classList.remove("navbar_active");
  }
});

// show modal-page
backBtnTop.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.classList.toggle("hide-scroll-bar");
  header.classList.toggle("forbid-click");
  main.classList.toggle("forbid-click");
});

//close modal-page
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.toggle("hide-scroll-bar");
  header.classList.toggle("forbid-click");
  main.classList.toggle("forbid-click");
});
document.querySelector(".close_Btn").style.cursor = "pointer";

// toggle bookmark image
bookMark.addEventListener("click", (e) => {
  let bookMarkPath = "/product-landing-page/images/icon-bookmark.svg";
  let bookMarkCyanPath = "/product-landing-page/images/icon-bookmark-cyan.svg";
  const fullPath = e.target.src;
  console.log(fullPath);
  const origin = new URL(fullPath).origin;
  console.log(origin);
  const bookMarkFullPath = origin + bookMarkPath;
  const bookMarkCyanFullPath = origin + bookMarkCyanPath;

  if (fullPath === bookMarkFullPath) {
    e.target.src = bookMarkCyanFullPath;
    bookmarkText.style.color = "#147A73";
    bookmarkText.innerHTML = "Bookmarked";
  } else {
    e.target.src = bookMarkFullPath;
    bookmarkText.style.color = "#7a7a7a";
    bookmarkText.innerHTML = "Bookmark";
  }
});
