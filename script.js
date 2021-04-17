"use strict";
// Selectors
const aboutMeBtn = document.querySelector(".about-me");
const aboutMeBox = document.querySelector(".about-me-box");
const educationBox = document.querySelector(".education-box");
const skillsBox = document.querySelector(".skills-box");
const workBox = document.querySelector(".work-box");
const freetimeBox = document.querySelector(".freetime-box");
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
      aboutMeBox.classList.remove("hidden");
      showContent();
    } else if (el.classList.contains("education")) {
      educationBox.classList.remove("hidden");
      showContent();
    } else if (el.classList.contains("skills")) {
      skillsBox.classList.remove("hidden");
      showContent();
    } else if (el.classList.contains("work")) {
      workBox.classList.remove("hidden");
      showContent();
    } else if (el.classList.contains("freetime")) {
      freetimeBox.classList.remove("hidden");
      showContent();
    }
  })
);

closeBtns.forEach((el) =>
  el.addEventListener("click", function (e) {
    // const item = e.target.closest("div");
    const item = e.target.parentNode.parentNode;
    item.classList.add("hidden");
    overlay.classList.add("hidden");
  })
);

overlay.addEventListener("click", closeContent);
