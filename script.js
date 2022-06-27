//Some classes and html functions need to determine a constant
var css = document.querySelector(".codess"); // color code
var color1 = document.querySelector(".color1"); // 1st color
var color2 = document.querySelector(".color2"); // 2nd color
var bodys = document.getElementById("gradient"); // color display
var linearDirection = document.getElementsByName("toDirection")[0]; //Select box

//displays default CSS RGBA values for linear-gradient

function currentSettings() {
  var CSSprop = window
    .getComputedStyle(bodys, null)
    .getPropertyValue("background-image");
  // console.log(CSSprop)
  css.textContent = CSSprop;
}

currentSettings();
//You have to make arrangements to see the color code in the display

function returnColor() {
  bodys.style.background =
    "linear-gradient(" +
    linearDirection.value +
    ", " +
    color1.value +
    "," +
    color2.value +
    ")";

  currentSettings();
}

document.querySelector('select[name="toDirection"]').onchange = returnColor;
color1.addEventListener("input", returnColor);
color2.addEventListener("input", returnColor);


var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");
    
fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}