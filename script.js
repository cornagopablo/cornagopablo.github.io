// Menu Bars Button transform to X Button
function menuBarsButton(x) {
    x.classList.toggle("change");
}

function openPage(pageName) {
    // Hide all elements with class="content" by default */
    var i, content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  }

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();