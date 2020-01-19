const Red = document.getElementById('r')
const Green = document.getElementById('g')
const Blue = document.getElementById('b')
const inputPanel = document.querySelector(".inputPanel")

inputPanel.addEventListener('change', function change(){
  let red = `${Red.value}`
  let green = `${Green.value}`
  let blue = `${Blue.value}`
  let hex = fullColorHex(red,green,blue)
  document.getElementById('hexPanel').innerHTML = hex 
  document.documentElement.style.setProperty(`--base`, hex)
})

inputPanel.addEventListener('mousemove', function change(){
  let red = `${Red.value}`
  let green = `${Green.value}`
  let blue = `${Blue.value}`
  let hex = fullColorHex(red,green,blue)
  document.getElementById('hexPanel').innerHTML = hex 
  document.documentElement.style.setProperty(`--base`, hex)
})

function inputValue(x){
  let value = document.getElementById(x).value
　document.getElementById(`value${x}`).innerHTML = value 
  return value  
}

function rgbToHex (rgb) { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
}

function fullColorHex(r,g,b) {   
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return "#" + red+green+blue;
}


