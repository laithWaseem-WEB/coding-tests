let namiJS = document.getElementById("nami");
let wlctJS = document.getElementById("wlct");
const wlcnsJS = document.getElementById("wlcns");
const wlcnbJS = document.getElementById("wlcnb");


function updateName() {
    localStorage.setItem("nami", namiJS.value);
    wlctJS.innerHTML = `welcome back, ${localStorage.getItem("nami")} `;
    wlcnbJS.innerHTML = "";
}

wlcnsJS.addEventListener("click", updateName)

if (localStorage.getItem("nami")) {
    wlctJS.innerHTML = `welcome back, ${localStorage.getItem("nami")} `;
    wlcnbJS.innerHTML = "";
}

// scrolling v

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let scrollValue = 1;

function updateScrollStyles() {
    if (scrollValue === 1) {
        appS1.style.height = "125px";
        appS1.style.width = "242px";
        appS1.style.borderRadius = "25px";

        appS2.style.height = "100px";
        appS2.style.width = "192px";
        appS2.style.borderRadius = "20px";
    }

    if (scrollValue === 2) {
        appS2.style.height = "125px";
        appS2.style.width = "242px";
        appS2.style.borderRadius = "25px";

        appS1.style.height = "100px";
        appS1.style.width = "192px";
        appS1.style.borderRadius = "20px";
    }
}

function scrollLeft() {
    if (scrollValue === 1) {

    } else {
        scrollValue = scrollValue - 1;
        updateScrollStyles();
    }
}

function scrollRight() {
    if (scrollValue === 2) { // change if more added

    } else {
        scrollValue = scrollValue + 1;
        updateScrollStyles();
    }
}

leftBtn.addEventListener("click", scrollLeft);
rightBtn.addEventListener("click", scrollRight);

const appS1 = document.getElementById("appScroll1");
const appS2 = document.getElementById("appScroll2");

updateScrollStyles();