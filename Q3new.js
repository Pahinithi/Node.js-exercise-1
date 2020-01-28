var fs = require('fs');


fs.appendFile('ukinodejsexercise1.txt', 'Uki is best place of learing full stack web development. and we study Uki6 batch.it help to our bright future!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
