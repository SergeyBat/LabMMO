// Реализация методов создания новой популяции
let readline = require('readline-sync');

const SIZE_POPULATION = 6;
const SIZE_CHR = 7;

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

class Chromos {
  mass = [];
  constructor() {
    let tempArray = []
    for (let i = 0; i < SIZE_POPULATION; i++) {
      tempArray = [];
      for(let j = 0; j < SIZE_CHR; j++) {
        tempArray.push(getRandomArbitrary(0,12))
      }
      this.mass.push(tempArray);
    }
  }

  getPopul = () => {
    return this.mass;
  }

  show = () => {
    console.log('\nПопуляция\n')
    for (let i = 0; i < this.mass.length; i++) {
      console.log(`Индивид № ${i} `, JSON.stringify(this.mass[i]))
    }
  }
}

function onePoint(ls) {
  console.log('\nПростой кроссинговер')

  let newPopulation = [];
  let cutPoint = getRandomArbitrary(0, ls[0].length-1)

  for (let i = 0; i < ls.length; i+=2) {
    let p1 = ls[i];
    let p2 = ls[i + 1];

    let leftP1 = p1.slice(0, cutPoint);
    let rightP1 = p1.slice(cutPoint);

    let leftP2 = p2.slice(0, cutPoint);
    let rightP2 = p2.slice(cutPoint);

    newPopulation.push(leftP1.concat(rightP2))
    newPopulation.push(leftP2.concat(rightP1))
  }

  show(newPopulation);
}

function twoPoint(ls) {
  console.log('\nДвухточечный кроссинговер')

  let newPopulation = [];
  let cutPoint1 = getRandomArbitrary(1, (ls[0].length / 2).toFixed(0));
  let cutPoint2 = getRandomArbitrary(cutPoint1 + 1, ls[0].length - 1)

  for (let i = 0; i < ls.length; i+=2) {
    let p1 = ls[i];
    let p2 = ls[i + 1];

    let leftP1 = p1.slice(0, cutPoint1);
    let middleP1 = p1.slice(cutPoint1, cutPoint2);
    let rightP1 = p1.slice(cutPoint2);

    let leftP2 = p2.slice(0, cutPoint1);
    let middleP2 = p2.slice(cutPoint1, cutPoint2);
    let rightP2 = p2.slice(cutPoint2);

    newPopulation.push(leftP1.concat(middleP2.concat(rightP1)));
    newPopulation.push(leftP2.concat(middleP1.concat(rightP2)));

  }

  show(newPopulation);
}

function threePoint(ls) {
  console.log('\nТрехточечный кроссинговер');

  let newPopulation = [];
  let cutPoint1 = getRandomArbitrary(1, (ls[0].length/2).toFixed(0));
  let cutPoint2 = getRandomArbitrary(cutPoint1 + 1, ls[0].length - 2);
  let cutPoint3 = getRandomArbitrary(cutPoint2 + 1, ls[0].length - 1);

  for (let i = 0; i < ls.length; i+=2) {
    let p1 = ls[i];
    let p2 = ls[i + 1];

    let leftP1 = p1.slice(0, cutPoint1);
    let middleLeftP1 = p1.slice(cutPoint1, cutPoint2);
    let middleRigthP1 = p1.slice(cutPoint2, cutPoint3);
    let rightP1 = p1.slice(cutPoint3);

    let leftP2 = p2.slice(0, cutPoint1);
    let middleLeftP2 = p2.slice(cutPoint1, cutPoint2);
    let middleRigthP2 = p2.slice(cutPoint2, cutPoint3);
    let rightP2 = p2.slice(cutPoint3);

    newPopulation.push(leftP1.concat(middleLeftP2.concat(middleRigthP1.concat(rightP2))));
    newPopulation.push(leftP2.concat(middleLeftP1.concat(middleRigthP2.concat(rightP1))));
  }

  show(newPopulation);
}

function loop(p1, p2) {
  res = [[], []]
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < SIZE_CHR; j++) {
      res[i].push(0);
    }
  }

  for (let i = 0; i < p1.length; i++) {
    res[0][p1.indexOf(p1[i])] = p2[i];
    res[1][p2.indexOf(p2[i])] = p1[i];
  }

  return res;
}

function loopAlg(ls) {
  console.log('\nЦиклический алгоритм')

  let newPopulation = [];

  for (let i = 0; i < ls.length; i+=2) {
    p1 = ls[i];
    p2 = ls[i+1];

    res = loop(p1, p2);

    for (let i = 0; i < 2; i++ ) {
      newPopulation.push(res[i]);
    }
  }

  show(newPopulation);
}

function show(ls) {
  console.log('Новая популяция');
  for (let i = 0; i < ls.length; i++) {
    console.log(`Хромосома ${i}: `, JSON.stringify(ls[i]))
  }
  console.log()
}

(() => {
  const popul = new Chromos();
  popul.show();
  let variable = popul.getPopul();

  onePoint(variable);
  twoPoint(variable);
  threePoint(variable);
  loopAlg(variable);
})()