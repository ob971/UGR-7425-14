var typed = new Typed(".typing", {
  strings: ["Epidemiologist", "web developer", "Graphic designer", "youtube"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav");
if (nav) {
  const navlist = nav.querySelectorAll("li");
  const totalNavList = navlist.length;
  const allSection = document.querySelectorAll(".section");
  const totalSection = allSection.length;

  for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector("a");
    if (a) {
      a.addEventListener("click", function () {
        removeBacksection();
        for (let j = 0; j < totalNavList; j++) {
          navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("href").split("#")[1];
        const targetElement = document.querySelector("#" + target);
        if (targetElement) {
          showsection(targetElement);
          if (window.innerHeight < 1200) {
            asidesectionTogglerBtn();
          }
        }
      });
    }
  }
}

function removeBacksection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBacksection(num) {
  allSection[num].classList.add("back-section");
}

function showsection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  element.classList.add("active");
}

const hireMeButton = document.querySelector(".hire-me");
if (hireMeButton) {
  hireMeButton.addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    const targetElement = document.querySelector("#section" + sectionIndex);
    if (targetElement) {
      removeBacksection();
      showsection(targetElement);
      updateNav(this);
      addBacksection(sectionIndex);
      if (window.innerHeight < 1200) {
        asidesectionTogglerBtn();
      }
    }
  });
}

const navTogglerbtn = document.querySelector(".logo .nav-toggler");
const aside = document.querySelector(".aside");

if (navTogglerbtn) {
  navTogglerbtn.addEventListener("click", () => {
    asidesectionTogglerBtn();
  });
}

function asidesectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerbtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}