const readline = require('readline-sync');


const sizePopulation = Number(
  readline.question('Задайте размер популяции: ')
)
const sizeChr = Number(
  readline.question('Задайте размер популяции: ')
)

class Population {
  constructor() {
    this.population = [];
    for (let item=0; item < sizePopulation; item++) {
      const tempArr = []
      for (let popul = 0; popul < sizeChr; popul++) {
        tempArr.push(Math.floor(Math.random()*27))
      }
      this.population.push(tempArr)
    }
  }

  getPopulation = () => {
    return this.population
  }

  printPopulation = () => {
    console.log('Популяция:')
    for (let item = 0; item < this.population.length; item++) {
      console.log(`Индивид № ${item}: ${this.population[item]}`)
    }
  }
}

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const randomSelection = (numberIndivid) => {
  console.log("\nСлучайный отбор хромосом")
  const indexPopulation = [];
  for (let item = 0; item < sizePopulation; item++) {
    indexPopulation.push(item);
  }
  const shuffleArray = shuffle(indexPopulation)
  const tempIndexPopulationArray = []
  for (let item = 0; item < sizePopulation; item++) {
    indexPopulation.push(item);
  }
  for (let item = 0; item < numberIndivid; item++) {
    tempIndexPopulationArray.push(shuffleArray[item]);
  }
  console.log(`Популяция после отбора ${tempIndexPopulationArray}`)
}

const fromWorstToBest = (population, number) => {
  console.log("От лучшего к худшему")
  const average = []
  for (let item = 0; item < population.length; item++) {
    average.push(population[item].reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0))
  }
  average.sort((a, b) => a - b )
  const chunk = [];
  const tempArrPart1 = average.slice(0, Math.floor(number/2))
  const tempArray = [...average]
  const tempArrPart2 = tempArray.reverse().slice(0, number/2 === 0 ? number/2 : Math.floor(number/2)+1)
  for (let item = 0; item < Math.floor(number/2); item++) {
    chunk.push(tempArrPart1[item])
    chunk.push(tempArrPart2[item])
  }
  number/2 !== 0 ? chunk.push(tempArrPart2[Math.floor(number/2)]) : null
  chunk.sort((a, b) => a - b)
  const arrayIndex = [];
  for (const item of chunk) {
    arrayIndex.push(average.findIndex(x => x === item))
  }
  console.log(`Популяция после отбора: ${arrayIndex}`)
}

const methodScale = (population) => {
  console.log("Метод шкалы в операторе селекции (на основе суммы списка)")
  const tmp = [];
  for (let item = 0; item < population.length; item++) {
    tmp.push(population[item].reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0))
  }

  const array = [];
  for (let i = 0; i < population.length; i++) {
    for (let j = 0; j < population.length; j++ ) {
      const tmpSumJ = population[j].reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
      if (tmp[i] === tmpSumJ) {
        if (tmpSumJ <= 60){
          array.push([j, tmp[i], 0])
        } else if (tmpSumJ > 60 && tmpSumJ <= 90) {
          array.push([j, tmp[i], 1])
        } else if (tmpSumJ > 90) {
          array.push([j, tmp[i], 2])
        }
      }
    }
  }

  const usr = Number(readline.question('Номер хромосом (0-2): '))
  const select = []
  for (let i = 0; i < population.length; i++) {
    if (usr === array[i][2]){
      select.push(array[i][0])
    }
  }
  console.log(`Хромосомы подходящие для селекции: ${select}`)
}

const methodElite = (population) => {
  console.log('метод элит')
  const kof_chr = []
  for (let i = 0; i < population.length; i++) {
    kof_chr.push(population[i].reduce((accumulator, currentValue) => {
      return accumulator + (currentValue*2+2)
    }, 0))
  }
  const tmp = [...kof_chr]

  tmp.sort((a,b) => a - b).reverse()

  const numberChromosome = readline.question('Количество элит (1-5): ');
  const tempArrayChromosome = []

  for (let i = 0; i < numberChromosome; i++) {
    tempArrayChromosome.push(kof_chr.findIndex(x => x === tmp[i]))
  }
  console.log(`Элитные хромосомы: `, tempArrayChromosome)
}

const population1 = new Population();
population1.printPopulation();
const printedPopulation = population1.getPopulation()

console.log("\n-> методы отбора");
const numberIndivid = Number(readline.question('Задайте кол-во индивидов от популяции: '))
randomSelection(numberIndivid)
fromWorstToBest(printedPopulation, numberIndivid)

console.log("\n-> методы селекции");
methodScale(printedPopulation)
methodElite(printedPopulation)