'use strict';

function converter(usd, euro) {
  const uhy = Math.trunc(document.querySelector('.uhy').value);
  document.querySelector('.usd').value = uhy / usd;
  document.querySelector('.euro').value = uhy / euro;
}

window.onload = () => {
  document.querySelector('.convert').onclick = () => converter(37, 40);
};
