function evilToLowerCase() {
  const fs = require('fs');

  fs.appendFileSync('./evil.txt', 'EVIL...\n');
  return this.toLocaleLowerCase();
}

function exampleOne() {
  String.prototype.toLowerCase = evilToLowerCase;

  console.info('QWER'.toLowerCase());
}

function exampleTwo() {
  const a = 'QWER';
  a.__proto__.toLowerCase = evilToLowerCase;

  console.info(a.toLowerCase());
}

function exampleThree() {
  const a = 'QWER';
  a['__proto__'].toLowerCase = evilToLowerCase;

  console.info(a.toLowerCase());
}

// exampleTwo();
exampleThree();
