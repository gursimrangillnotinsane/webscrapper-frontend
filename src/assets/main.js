

function buttonclick() {
    var input = document.getElementsByClassName("main")
    input[0].style.height = "150px";
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
    tables.style.display = "none"

}



const nav = document.querySelector("details");
let navTop = nav.offsetTop;
const topButton = document.querySelector(" a.top");
const pullQuote = document.querySelectorAll(".pullquote");
window.addEventListener("scroll", function () {

    if (window.scrollY > navTop) {
        nav.classList.add("floater");
        topButton.style.visibility = "visible";
    } else {
        nav.classList.remove("floater");
        topButton.style.visibility = "hidden";
    }
});

topButton.addEventListener("click", function (event) {
    scrollToTop();
    event.preventDefault();
});


function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}