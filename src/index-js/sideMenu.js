const sideMenuContainer = document.getElementById("sideMenu-container");
const sideMenu = document.getElementById("sideMenu");
const hamMenu = document.getElementById("icon-menu-ham");



hamMenu.addEventListener("click",() => {
    sideMenuContainer.style.display = "block";
})
sideMenuContainer.addEventListener("click",() => {
    sideMenuContainer.style.display = "none";
})
