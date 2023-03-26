function randomNumberGenerator(quantity) {
  const megaSena = Array();

  for (let index = 0; index < quantity; index++) {
    var number = 0;
    do {
      number = getRandomArbitrary(1, 60);
    } while (megaSena.includes(number));

    megaSena.push(number);
  }

  return megaSena.sort((a, b) => a - b);
}

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

console.log(randomNumberGenerator(6));
