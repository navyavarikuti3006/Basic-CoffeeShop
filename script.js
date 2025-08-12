//Header Section Script starts here
//For Menu Button Functionality
//This script toggles the side navigation menu when the menu button is clicked.
var menuBtn = document.getElementById('menuBtn');
var sideNav = document.getElementById('sideNav');
var menuBtnImg = document.getElementById('menuBtnImg');
sideNav.style.right = "-250px"; // Initially hide the side navigation

menuBtn.onclick = function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menuBtnImg.src = "Images/close.png"; // Change the image to close icon
    }
    else{
        sideNav.style.right = "-250px";
        menuBtnImg.src = "Images/menu.png"; // Change the image back to menu icon
    }
}
//Header Section Script ends here
//Smooth Scroll Script
var scroll=new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
//Smooth Scroll Script ends here