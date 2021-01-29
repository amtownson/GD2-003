// function ChangeColourF() {
// document.getElementById("ChangeColourJS").style.backgroundColor= "purple";
// return false;
// };


var ChangeColour = document.GetElementById("ChangeColourJS");

ChangeColour.addEventListener("click", function() {ChangeColour.classlist.toggle("NewColour");}, false);