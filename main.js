let image = document.querySelector("img");

let btnDesine = document.querySelector(".ds");
btnDesine.addEventListener("click", function () {
    let pagr = document.querySelector("main");
    pagr.style.flexDirection = "row-reverse";
})

let btnKaire = document.querySelector(".kr");
btnKaire.addEventListener("click", function () {
    let pagr = document.querySelector("main");
    pagr.style.flexDirection = "row";
})

let btnPaslepti = document.querySelector(".pasl");
btnPaslepti.addEventListener("click", function () {
    image.style.display = "none";
})


let btnNukelt = document.querySelector(".nukl");
btnNukelt.addEventListener("click", function () {
    let pagr = document.querySelector("main");
    pagr.style.flexDirection = "column-reverse";
})


let btnAtstatyti = document.querySelector(".atst");
btnAtstatyti.addEventListener("click", function () {
    image.style.display = "flex";
    image.style.flexDirection = "row";
})