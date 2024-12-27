let namiJS = document.getElementById("nami");
let wlctJS = document.getElementById("wlct");
const wlcnsJS = document.getElementById("wlcns");
const wlcnbJS = document.getElementById("wlcnb");

function updateName() {
    wlctJS.innerHTML = `welcome back, ${namiJS.value} `;
    wlcnbJS.innerHTML = "";
}

wlcnsJS.addEventListener("click", updateName)

