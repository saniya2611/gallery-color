
const selectColor = document.getElementById("selectColor")

const all = Array.from(document.querySelectorAll(".all"))
const burgandy = Array.from(document.querySelectorAll(".burgundy"))
const fadedPink = Array.from(document.querySelectorAll(".faded-pink"))
const powderblue = Array.from(document.querySelectorAll(".powder-blue"))
const lime = Array.from(document.querySelectorAll(".lime"))

const onChangeColor = (eve) => {
    let getColor = eve.target.value;
    console.log(getColor);
    all.forEach(div => div.classList.add('d-none'));

    let getDivs = Array.from(document.querySelectorAll("."+getColor))
    getDivs.forEach(div => div.classList.remove('d-none'))

}
 




selectColor.addEventListener("change", onChangeColor)








//selectColor.addEventListener("change", onChangeColor)

