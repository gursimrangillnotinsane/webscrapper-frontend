

function buttonclick() {
    var input = document.getElementsByClassName("input")
    console.log(input)
    input[0].style.height = "90px";
    // Create a new image element
    var backgroundImage = new Image();

    // Set the source of the image (background image URL)
    // backgroundImage.src = "https://i.pinimg.com/originals/66/94/11/669411a8a3da9affd30c9f89364918f2.gif";

    // Apply blur effect
    backgroundImage.style.filter = "blur(3px)";
    backgroundImage.style.position = "fixed";
    backgroundImage.style.size = "cover"
    backgroundImage.style.top = "0";
    backgroundImage.style.left = "0";
    backgroundImage.style.width = "105%";
    backgroundImage.style.height = "105vh";
    backgroundImage.style.zIndex = "-1";

    // Append the image element to the body
    document.body.appendChild(backgroundImage);
    var details = document.getElementsByTagName("details")
    details[0].open = true;

}

var details = document.getElementsByTagName("details")
console.log(details)

for (var i = 0; i < details.length; i++) {
    (function (index) {
        details[index].addEventListener("toggle", function () {
            if (details[index].open) {
                // Close all other open details elements
                for (var i = 0; i < details.length; i++) {

                    if (details[i] !== details[index] && details[i].open) {
                        details[i].open = false;
                    }
                }

            }
        });
    })(i);
}
var loader = document.getElementById("loader")
var tables = document.getElementById("result")

var errorLinkdin = document.getElementById("nothingToShowLinkdin")
var tableLinkdin = document.getElementById("resultShowLinkdin")

var errorJobank = document.getElementById("nothingToShowJobank")
var tableJobank = document.getElementById("resultShowJobank")


function visible() {
    loader.style.display = "none"
    tables.style.display = "flex"
}

function errorsjs() {
    alert("The search filed cannot be empty or contain more then 2 words")
    document.getElementsByTagName("input")[0].value = ""
}

function linkdinres() {
    errorLinkdin.style.display = "block"
    tableLinkdin.style.display = "none"
}

function jobankRes() {
    errorJobank.style.display = "block"
    tableJobank.style.display = "none"
}
function reset() {
    errorLinkdin.style.display = "none"
    tableLinkdin.style.display = "block"

    errorJobank.style.display = "none"
    tableJobank.style.display = "block"

    loader.style.display = "flex"

}