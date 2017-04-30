// Kodilla task 9.3

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animal = animal.toUpperCase();
var text = text.replace('Papugi', animal);

console.log(text);
console.log(text.length);
textHalfLength = (text.length / 2);
textNew = text.substr(0, textHalfLength);

console.log(textNew);
console.log(textNew.length);