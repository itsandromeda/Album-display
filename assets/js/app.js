/*global document, select, alert, console*/
var img = document.getElementsByClassName("portfolio"),
    i;

select.onchange = function () {
    "use strict";
    if (select.value === "original") {
        for (i = 0; i < img.length; i += 1) {
            img[i].setAttribute("class", "portfolio");
        }
    } else if (select.value === "black-white") {
        for (i = 0; i < img.length; i += 1) {
            img[i].setAttribute("class", "portfolio black-white");
        }
    } else if (select.value === "sepia") {
        for (i = 0; i < img.length; i += 1) {
            img[i].setAttribute("class", "portfolio sepia");
        }
    } else if (select.value === "invert") {
        for (i = 0; i < img.length; i += 1) {
            img[i].setAttribute("class", "portfolio invert");
        }
    }
};

var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-pic");
var captionText = document.getElementById("caption");

var modalDisplay = function () {
    "use strict";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

for (i = 0; i < img.length; i += 1) {
    document.getElementById('img0' + i).addEventListener('click', modalDisplay);
}

var close = document.getElementsByClassName("close")[0];

close.addEventListener('click', function () {
    "use strict";
    modal.style.display = "none";
});