// https://www.omnicalculator.com/conversion/feet-to-miles

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const milesRadio = document.getElementById('milesRadio');
const feetRadio = document.getElementById('feetRadio');

let miles;
let feet = v; 

// labels of the inpust
const variable = document.getElementById('variable');

milesRadio.addEventListener('click', function() {
  variable.textContent = 'Feet';
  feet = v;
  result.textContent = '';
});

feetRadio.addEventListener('click', function() {
  variable.textContent = 'Miles';
  miles = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(milesRadio.checked)
    result.textContent = `Miles = ${computemiles().toFixed(5)}`;

  else if(feetRadio.checked)
    result.textContent = `Feet = ${computefeet().toFixed(5)}`;
})

// calculation

function computemiles() {
  return Number(feet.value) / 5280;
}

function computefeet() {
  return Number(miles.value) * 5280;
}