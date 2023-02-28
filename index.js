"use-strict;";
// Links Scroll
const AboutMeTwoButton = document.querySelector(".AboutMeLink");
const AboutMeTwoSection = document.querySelector(".AboutMeTwo");
const SkillsSection = document.querySelector("body .Skills");
const SkillsButton = document.querySelector(".SkillsLink");
const PortfolioSection = document.querySelector("body .Portfolio");
const PortfolioButton = document.querySelector(".PortfolioLink");
const ContactMeButton = document.querySelector(".ContactMeLink");
const ContactMeSection = document.querySelector(".ContactME");
const BackToTop = document.querySelector("footer .MainA");
const AboutMe = document.querySelector(".AboutMe");
AboutMeTwoButton.addEventListener("click", function (e) {
  e.preventDefault();
  AboutMeTwoSection.scrollIntoView({ behavior: "smooth" });
  console.log("about");
});

SkillsButton.addEventListener("click", function (e) {
  e.preventDefault();
  SkillsSection.scrollIntoView({ behavior: "smooth" });
});

PortfolioButton.addEventListener("click", function (e) {
  e.preventDefault();
  PortfolioSection.scrollIntoView({ behavior: "smooth" });
});

ContactMeButton.addEventListener("click", function (e) {
  e.preventDefault();
  ContactMeSection.scrollIntoView({ behavior: "smooth" });
});

BackToTop.addEventListener("click", function (e) {
  e.preventDefault();
  AboutMe.scrollIntoView({ behavior: "smooth" });
});
//  Slider Portfolio
const BoxesDeveloped = document.querySelectorAll(".DevelopedDiv div");
const BoxesAll = document.querySelectorAll(".AllDiv  div");
const BoxesDesigned = document.querySelectorAll(".DesignedDiv div");
const DivHover = document.querySelectorAll(".Box .HoverDiv");
const AllBoxes = [...BoxesDeveloped, ...BoxesDesigned, ...BoxesAll];
const AllButton = document.querySelector(".AllButton");
const DevelopedButton = document.querySelector(".DevelopedButton");
const DesignedButton = document.querySelector(".DesignedButton");

const All = document.querySelector(".AllDiv");
const Dev = document.querySelector(".DevelopedDiv");
const Des = document.querySelector(".DesignedDiv");
AllBoxes.forEach((a) =>
  a.addEventListener("mouseover", function (e) {
    e.preventDefault();
    let [, hover] = e.target.closest(".Box").children;
    // let id = hover.getAttribute("id");
    hover.style.visibility = "visible";
  })
);
AllBoxes.forEach((a) =>
  a.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    let [, hover] = a.closest(".Box").children;
    hover.style.visibility = "hidden";
  })
);
let item;
const ButtonArr = [AllButton, DevelopedButton, DesignedButton];
const HoveringButtons = function (item) {
  ButtonArr.forEach(
    (a) => (
      (a.style.color = "#7c7c7c"), (a.style.borderBottom = "1px solid #7c7c7c")
    )

    //   function () {
    //     a.style.color = "#7c7c7c";
    //     a.style.borderBottom = "1px solid #7c7c7c";
    //   }
  );
  ButtonArr[item].style.color = "#fff";
  ButtonArr[item].style.borderBottom = "1px solid #fff";
};

item = 0;
HoveringButtons(item);
HoveringButtons;
AllButton.addEventListener("click", function () {
  item = 0;
  //   border-bottom: 1px solid #fff;
  Des.style.display = "none";
  All.style.display = "grid";
  Dev.style.display = "none";
  Dev.style.transform = "translateX(100%)";
  Dev.style.transition = "all 500ms ease-in-out";
  All.style.transform = "translateX(0%)";
  All.style.transition = "all 500ms ease-in-out";
  Des.style.transform = "translateX(200%)";
  HoveringButtons(item);
});
DevelopedButton.addEventListener("click", function () {
  Des.style.display = "none";
  All.style.display = "none";
  Dev.style.display = "grid";
  item = 1;
  Dev.style.transform = "translateX(0%)";
  Dev.style.transition = "all 500ms ease-in-out";
  All.style.transform = "translateX(-100%)";
  All.style.transition = "all 500ms ease-in-out";
  Des.style.transform = "translateX(100%)";
  HoveringButtons(item);
});
DesignedButton.addEventListener("click", function () {
  item = 2;
  Des.style.display = "grid";
  All.style.display = "none";
  Dev.style.display = "none";
  Dev.style.transform = "translateX(-100%)";
  Dev.style.transition = "all 500ms ease-in-out";
  All.style.transform = "translateX(-200%)";
  Des.style.transform = "translateX(0%)";
  Des.style.transition = "all 500ms ease-in-out";
  HoveringButtons(item);
});

//   Responsive Nav bar

const Menu = document.querySelector(" header #MenuBar");
const navbar = document.querySelector("header nav");

let hidden = true;

Menu.addEventListener("click", function (e) {
  if (hidden) {
    navbar.style.display = "flex";
    navbar.style.transform = "translateX(0%)";
    navbar.style.transition = "translateX 1s";
    hidden = false;
  } else {
    navbar.style.display = "none";
    hidden = true;
  }
});
// const fun = function () {
//   if () {
//     navbar.style.display = "flex";
//   } else {
//     navbar.style.display = "none";
//   }
// };

// const resize = function () {
//   screen.addEventListener("resize", function () {
//     console.log(this.innerWidth);
//   });
// };
const body = document.querySelector("body");

window.addEventListener("resize", function (e) {
  if (this.window.innerWidth > 580) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});
