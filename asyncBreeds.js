// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('Callback: I have the data!')
    if (!error) return callback(data);
    if (error) return callback(data);

  });


}

// we try to get the return value
// breedDetailsFromFile('bombay', (bombay) => {
//   console.log('Return Value: ', bombay)
// });

module.exports = breedDetailsFromFile;