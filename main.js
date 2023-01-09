let sidebar = false;
const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("#header");
const navbar = document.querySelector("#navbar");
const actionOne = document.querySelector("#actions-1");
const actionTwo = document.querySelector("#actions-2");
const heading = document.querySelector("#heading");
const navOne = document.querySelector("#nav-link-1");
const navTwo = document.querySelector("#nav-link-2");
function toggleNav() {
  hamburgerMenu.classList.toggle("active");
  sidebar = !sidebar;

  if (sidebar) {
    navbar.classList.toggle("animate__fadeInDown") &&
      navbar.classList.toggle("animate__fadeInDown");
    navbar.classList.toggle("animate__fadeOutUp");
    actionOne.classList.toggle("animate__fadeOutDown");
    heading.classList.toggle("animate__zoomOut");
    navOne.classList.toggle("unhide") && navOne.classList.toggle("unhide");
    actionOne.classList.toggle("actions-unhide") &&
      actionOne.classList.toggle("actions-unhide");
    actionTwo.classList.toggle("animate__fadeInUp") &&
      actionTwo.classList.toggle("animate__fadeInUp");
    actionTwo.classList.toggle("animate__fadeOutDown") &&
      actionTwo.classList.toggle("animate__fadeOutDown");
    setTimeout(() => {
      navOne.classList.toggle("hide");
      navTwo.classList.toggle("hide");
      navTwo.classList.toggle("unhide");
      actionOne.classList.toggle("hide");
      actionTwo.classList.toggle("hide");
      actionTwo.classList.toggle("actions-unhide");
      navbar.classList.toggle("sidebar");
      navbar.classList.toggle("animate__fadeOutUp");
      navbar.classList.toggle("animate__fadeInDown");
      actionTwo.classList.toggle("animate__fadeInUp");
    }, 1000);
  }

  if (sidebar === false) {
    navbar.classList.toggle("animate__fadeOutUp");
    actionTwo.classList.toggle("animate__fadeOutDown");
    navTwo.classList.toggle("unhide");
    actionTwo.classList.toggle("actions-unhide");

    setTimeout(() => {
      navTwo.classList.toggle("hide");
      navOne.classList.toggle("hide");
      navOne.classList.toggle("unhide");
      actionTwo.classList.toggle("hide");
      actionOne.classList.toggle("hide");
      actionOne.classList.toggle("actions-unhide");
      navbar.classList.toggle("sidebar");
      navbar.classList.toggle("animate__fadeOutUp");
      navbar.classList.toggle("animate__fadeInDown");
      navbar.classList.toggle("animate__fadeInDown");
      actionOne.classList.toggle("animate__fadeOutDown");
      heading.classList.toggle("animate__zoomOut");
      actionOne.classList.toggle("animate__fadeInUp");
      heading.classList.toggle("animate__zoomIn");
    }, 1000);
  }
}

hamburgerMenu.addEventListener("click", toggleNav);
