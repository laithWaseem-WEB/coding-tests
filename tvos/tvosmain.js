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