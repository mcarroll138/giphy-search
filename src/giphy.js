export default class GhiphyService {
  static getGif(phrase) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=${process.env.API_KEY}`;
      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}





// export default function getGif(phrase) {
//   let promise = new Promise(resolve, reject) {
//   let request = new XMLHttpRequest();
//   const url = `https://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=K3hYf8L1myC9PKkAfOvw0RyRTbAqlFAN`;

//   request.addEventListener("loadend", function () {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       printElements(response, phrase);
//     } else {
//       printError(this, response, phrase);
//     }
//   });

//   request.open("GET", url, true);
//   request.send();
// }

// promise.then(function(response){
//   printElements(response);
// },function(errorMessage) {
//   printError(errorMessage);
// });

