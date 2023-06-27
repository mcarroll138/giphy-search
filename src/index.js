
import './css/styles.css';
import GhiphyService from './giphy.js';
// Business Logic
function getGif(phrase) {
  let promise = GhiphyService.getGif(phrase);
  promise.then(function (getGifDataArray) {
    printElements(getGifDataArray);
  }, function (errorArray) {
    printError(errorArray);
  }
  )
}


// UI Logic
// function printElements(apiResponse) {
//   document.querySelector('#image').src = apiResponse.data[4].images.downsized.url;
// }
// function printError(error) {
//   document.querySelector('#showResponse').innerText = `There was an error accessing the gif: ${error.message}`;


function printError(apiResponse) {
  console.log(apiResponse);
  document.querySelector('#showResponse').innerText = `There was an error accessing the gif: ${apiResponse.meta.status}`;
}

function printElements(apiResponse) {
  console.log(apiResponse);
  document.querySelector('#image').src = apiResponse.data[2].images.downsized.url;
  document.querySelector('#showResponse').innerText = `Hope you like you JIFF!`;
}
function handleFormSubmission(event) {
  event.preventDefault();
  const phrase = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getGif(phrase);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});