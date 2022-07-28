const horizontalRange = document.querySelector("#h-range");
const verticalRange = document.querySelector("#v-range");
const blurRange = document.querySelector("#b-range");
const spreadRange = document.querySelector("#s-range");
const boxShad = document.querySelector(".box");
const textColor = document.querySelector("#c-text");
const picker = document.querySelector("#c-picker");
const horizontalNumber = document.querySelector("#h-number");
const verticalNumber = document.querySelector("#v-number");
const blurNumber = document.querySelector("#b-number");
const spreadNumber = document.querySelector("#s-number");
const insetChekBox = document.querySelector("#inset");
const boxColorInput = document.querySelector("#box-color");
const borderColorInput = document.querySelector("#boxBorder-color");
const boxRadiusInput = document.querySelector("#box-borderRadius");
const boxHeight = document.querySelector("#box-height");
const boxWidth = document.querySelector("#box-width");
const borderNumber = document.querySelector("#border-number");
const heightNumber = document.querySelector("#height-number");
const widthNumber = document.querySelector("#width-number");


var valHorizont = 0;
var valVertical = 7;
var valBulr = 45;
var valSpread = 0;
var valColor = "#d9bdff";
var insetFalg = "";
shadowGenerator();

insetChekBox.addEventListener("click", (ev) => {
    if (ev.target.checked === true) {
        insetFalg = "inset";
        shadowGenerator();
    } else {
        insetFalg = "";
        shadowGenerator();
    }
});

horizontalRange.addEventListener("input", (ev) => {
    // console.log(ev.target.value);
    valHorizont = ev.target.value;
    horizontalNumber.value = valHorizont;
    shadowGenerator();
});
verticalRange.addEventListener("input", (ev) => {
    valVertical = ev.target.value;
    verticalNumber.value = valVertical;
    shadowGenerator();
});
blurRange.addEventListener("input", (ev) => {
    valBulr = ev.target.value;
    blurNumber.value = valBulr;
    shadowGenerator();
});
spreadRange.addEventListener("input", (ev) => {
    valSpread = ev.target.value;
    spreadNumber.value = valSpread;
    shadowGenerator();
});

picker.addEventListener("input", (ev) => {
    valColor = ev.target.value;
    textColor.value = valColor;
    shadowGenerator();
});

horizontalNumber.addEventListener("keydown", (ev) => {
    // console.log(ev.target.value);
    valHorizont = ev.target.value;
    horizontalRange.value = valHorizont;
    shadowGenerator();
});
verticalNumber.addEventListener("keydown", (ev) => {
    valVertical = ev.target.value;
    verticalRange.value = valVertical;
    shadowGenerator();
});
blurNumber.addEventListener("keydown", (ev) => {
    valBulr = ev.target.value;
    blurRange.value = valBulr;
    shadowGenerator();
});
spreadNumber.addEventListener("keydown", (ev) => {
    valSpread = ev.target.value;
    spreadRangeblurRange.value = valSpread;
    shadowGenerator();
});

textColor.addEventListener("keyup", (ev) => {
    valColor = ev.target.value;
    picker.value = valColor;
    shadowGenerator();
});

function shadowGenerator() {
    boxShad.style.boxShadow = `${insetFalg} ${valHorizont}px ${valVertical}px ${valBulr}px ${valSpread}px ${valColor}`;
}

boxColorInput.addEventListener("keyup", (ev) => {
    boxShad.style.backgroundColor = ev.target.value;
});

borderColorInput.addEventListener("keyup", (ev) => {
    boxShad.style.border = `1px solid ${ev.target.value}`;
});

boxRadiusInput.addEventListener("input", (ev) => {
    boxShad.style.borderRadius = `${ev.target.value}rem`;
    borderNumber.value = ev.target.value;
});
boxHeight.addEventListener("input", (ev) => {
    boxShad.style.height = `${ev.target.value}rem`;
    heightNumber.value =ev.target.value;
});
boxWidth.addEventListener("input", (ev) => {
    boxShad.style.width = `${ev.target.value}rem`;
    widthNumber.value =ev.target.value;
});

//! ////////////////////


borderNumber.addEventListener("keyup", (ev) => {
    boxShad.style.borderRadius = `${ev.target.value}rem`;
    boxRadiusInput.value= ev.target.value

});
heightNumber.addEventListener("keyup", (ev) => {
    boxShad.style.height = `${ev.target.value}rem`;
    boxHeight.value= ev.target.value
});
widthNumber.addEventListener("keyup", (ev) => {
    boxShad.style.width = `${ev.target.value}rem`;
    boxWidth.value= ev.target.value
});

