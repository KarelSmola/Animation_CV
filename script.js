"use strict";
// Selectors
const aboutMeBtn = document.querySelector(".about-me");
const aboutMeContent = document.querySelector(".about-me-content");
const educationContent = document.querySelector(".education-content");
const skillsContent = document.querySelector(".skills-content");
const workContent = document.querySelector(".work-content");
const freetimeContent = document.querySelector(".freetime-content");
const overlay = document.querySelector(".overlay");
const closeBtns = document.querySelectorAll(".close-button");
const btns = document.querySelectorAll("button");

// Functions
const showContent = function () {
  overlay.classList.remove("hidden");
};

const closeContent = function (e) {
  const parent = e.target.parentNode;
  let sibling = parent.firstElementChild;
  let siblings = [];

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  siblings.forEach((sibling) => sibling.classList.add("hidden"));
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    const parent = overlay.parentNode;
    let sibling = parent.firstElementChild;
    let siblings = [];
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    siblings.forEach((sibling) => sibling.classList.add("hidden"));
  }
});

btns.forEach((el) =>
  el.addEventListener("click", function () {
    if (el.classList.contains("about-me")) {
      aboutMeContent.classList.remove("hidden");
      showContent();
    } else if (el.classList.contains("education")) {
      educationContent.classList.remove("hidden");
      showContent();
    } else if (el.classList.contains("skills")) {
      skillsContent.classList.remove("hidden");
      showContent();
    } else if (el.classList.contains("work")) {
      workContent.classList.remove("hidden");
      showContent();
    } else if (el.classList.contains("freetime")) {
      freetimeContent.classList.remove("hidden");
      showContent();
    }
  })
);

closeBtns.forEach((el) =>
  el.addEventListener("click", function (e) {
    const item = e.target.closest("div");
    item.classList.add("hidden");
    overlay.classList.add("hidden");
  })
);

overlay.addEventListener("click", closeContent);
