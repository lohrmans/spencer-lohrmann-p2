// index.html js
//Variables 
var colorEl1 = document.getElementById('color-1');
var colorEl2 = document.getElementById('color-2');
var colorEl3 = document.getElementById('color-3');
var colorPickerEl = document.getElementById('color-picker');

//getElementById 
function get(element) {
    return document.getElementById(element);
}

//Sets background color of color1 to text input, color2 to color1, and color3 to color2
function changeColor() {
    if(!colorPickerEl.value.includes('#')) {
        alert("You messed with the pound sign!")
        document.getElementById('rainbow').src = "images/shame.gif"
    } else {
        colorEl3.style.backgroundColor = colorEl2.style.backgroundColor;
        colorEl2.style.backgroundColor = colorEl1.style.backgroundColor;
        colorEl1.style.backgroundColor = colorPickerEl.value;
        if (document.getElementById('rainbow').src = "images/shame.gif") {
            document.getElementById('rainbow').src = "images/rainbow.jpg"
        } 
    }
    colorPickerEl.value = '#'    
}

// palette.html js

//Buttons
var swatchButtonEl = get('swatch-button');
var saveButtonEl = get('save-palette');
//Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function addToPalette() {
  var paletteArea = get('colors-go-here');
  var hexTextEl = get('hex-text');

  var newSwatch = document.createElement('span');
  newSwatch.innerHTML = hexTextEl.value;
  newSwatch.style.backgroundColor = hexTextEl.value;
  newSwatch.id = 'swatch';
  paletteArea.appendChild(newSwatch);

  hexTextEl.value = '#';
}

function addPalette() {
  //Create Array from completedPalette children
  var swatchArray = [...document.getElementById('colors-go-here').children];
  //Create palette to insert into display content
  var completedPalette = document.createElement('div');
  completedPalette.id = 'palette';
  
  swatchArray.forEach(function (swatch) {
    //Create new span for swatch
    var newSwatch = document.createElement('span');
    //Assign values to new swatch
    newSwatch.innerHTML = swatch.innerHTML;
    newSwatch.style.backgroundColor = swatch.innerHTML;
    newSwatch.id = 'swatch';
    completedPalette.appendChild(newSwatch);
  });
  //Add completed palette 
  get('completed-palettes').appendChild(completedPalette);
  clearPicker();

}

//This function clears the colors your entered after you save a color palette
function clearPicker() {
  while (get('colors-go-here').lastChild) {
    get('colors-go-here').removeChild(get('colors-go-here').lastChild)
  }
}

//Modal
//I liked the look of the this modal box I found online, so I used it.
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



swatchButtonEl.addEventListener('click', addToPalette);
saveButtonEl.addEventListener('click', addPalette);
