// Typed.js initialization
const typed = new Typed(".typing", {
  strings: ["Epidemiologist", "Web Developer", "Graphic Designer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Navigation handling
const nav = document.querySelector(".nav");

if (nav) {
  const navlist = nav.querySelectorAll("li");
  const allSections = document.querySelectorAll(".section");
  const totalSections = allSections.length;

  navlist.forEach((listItem, index) => {
    const link = listItem.querySelector("a");

    if (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        removeBackSection();
        deactivateAllNavLinks();

        link.classList.add("active");

        const target = link.getAttribute("href").split("#")[1];
        const targetElement = document.querySelector(`#${target}`);

        if (targetElement) {
          showSection(targetElement);
          if (window.innerHeight < 1200) {
            asideSectionTogglerBtn();
          }
        }
      });
    }
  });
}

// Section handling functions
function removeBackSection() {
  allSections.forEach((section) => section.classList.remove("back-section"));
}

function showSection(element) {
  allSections.forEach((section) => section.classList.remove("active"));
  element.classList.add("active");
}

// "Hire Me" button handling
const hireMeButton = document.querySelector(".hire-me");

if (hireMeButton) {
  hireMeButton.addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    const targetElement = document.querySelector(`#section${sectionIndex}`);

    if (targetElement) {
      removeBackSection();
      showSection(targetElement);
      updateNav(this);
      addBackSection(sectionIndex);
      if (window.innerHeight < 1200) {
        asideSectionTogglerBtn();
      }
    }
  });
}

// Navigation toggler button handling
const navTogglerBtn = document.querySelector(".logo .nav-toggler");
const aside = document.querySelector(".aside");

if (navTogglerBtn) {
  navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);
}

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  allSections.forEach((section) => section.classList.toggle("open"));
}

// Helper functions
function deactivateAllNavLinks() {
  navlist.forEach((listItem) => listItem.querySelector("a").classList.remove("active"));
}

function addBackSection(num) {
  allSections[num].classList.add("back-section");
}

function updateNav(button) {
  // Update navigation state if needed
}
