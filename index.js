'use strict';

function getDogImage(x) {
  fetch(`https://dog.ceo/api/breeds/image/random/${x}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  responseJson.message.forEach(el => {
    console.log(el);
  });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let x = document.querySelector('#quantity').value;
    getDogImage(x);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});