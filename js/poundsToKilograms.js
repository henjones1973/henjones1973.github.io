function poundsToKilograms(){
  //INPUT 
  let pounds = parseFloat(document.getElementById
  ('pounds').value);

// PROCESSING
// Conversion factor for pounds to kilograms is

let kilograms = pounds * .45359237

// OUTPUT
document.getElementById('output').textContent =
kilograms.toFixed(3) + " Kilograms";
}

