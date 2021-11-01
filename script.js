// Sticky menu

// Execute function when scrolls the page
window.onscroll = function() {siMenuSticky()};

// Get the header and the menu
var menu = document.getElementById("siHeaderMainMenu")
var header = document.getElementById("siHeader");

// Get the offset position of the menu
var sticky = menu.offsetTop;

// Add the sticky class to the header when reach menu scroll position. Remove "sticky" when leave scroll position
function siMenuSticky() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}