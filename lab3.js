// Реализация методов создания новой популяции
let readline = require('readline-sync');

const SelectMethod = () => {
  const method = Number(readline.question(
    'Выберите функцию: \n' +
    '1. Создание начальной популяции \n' +
    '2. Развитие популяций \n' +
    '3. Синтез различных видов хромосом \n' +
    'Введите число: '
  ))
  return ResultProgram(method);
}

const ResultProgram = (method) => {
  switch (method){
    case 1:
      return CreatePopulation()
    case 2:
      return RisePopulation()
    case 3:
      return SynthesisСhromosomeSpecies()
    default:
      console.log('Проверьте введенные данные')
  }
}

const CreatePopulation = () => {
  switch (
    Number(readline.question('Создание начальной популяции. Выберите метод:\n' +
      '1. "Одеяло" \n' +
      '2. "Дробовик" \n' +
      '3. "Фокусировка" \n' +
      '4. "Комбинированный" \n' +
      'Введите число: '))
    ){
    case 1:
      return {
        selectedMethod: "Создание начальной популяции. Метод 'Одеяло'",
        result: blanket()
      }
    case 2:
      return {
        selectedMethod: "Создания начальной популяции. Метод 'Дробовик'",
        result: shotgun()
      }
    case 3:
      return {
        selectedMethod: "Создания начальной популяции. Метод 'Фокусировка'",
        result: focusing()
      }
    case 4:
      return {
        selectedMethod: "Создания начальной популяции. Метод 'Комбинированный'",
        result: chunk()
      }
    default:
      console.log('Проверьте введенные данные')
  }
}

const DevelopmentPopulation = () => {
  const method = Number(readline.question('Развитие популяций:\n' +
    '1. "micro" \n' +
    '2. "macro" \n' +
    '3. "meta" \n' +
    'Введите число: '))
  const risePopulationArray = RisePopulation(method)
  switch ( method ) {
    case 3:
      const tempArr = [];
      const mx = [];
      console.log(`\nПопуляции:`)
      for (let item = 0; item < risePopulationArray; item++ ) {
        console.log(`\nПопуляция ${item}:`)
        for (let population = 0; population < risePopulationArray; population++ ) {
          console.log(`Хромосома: ${population}, ${risePopulationArray[item][population]}`)
        }
        tempArr.push(lengthArr(risePopulationArray[item]))
        mx.push(risePopulationArray[item].length)
      }
      const maxEl = Math.max(mx)
      const index = mx.find(item => item === maxEl )
      console.log(`\nПопуляция: ${index}`)
      console.log(`\nХромосома: ${tempArr[index][1]}:`)
      console.log(`\nЭволюционный поиск в хромосомах: ${tempArr[index][0]}`)
      return {
        selectedMethod: "Развитие популяций. Метод 'meta'",
        result: NewPopulation(method, tempArr[index][0])
      };
    case 2:
      console.log(`\nПопуляция 1:`)
      for (let item = 0; item < risePopulationArray.length; item++ ) {
        console.log(`\nХромосома: ${item}: ${risePopulationArray[item]} `)
      }
      const tmp = lengthArr(risePopulationArray)
      console.log(`\nХромосома: ${tmp[1]}:`)
      console.log(`\nЭволюционный поиск в хромосомах: ${tmp[0]}`)
      return {
        selectedMethod: "Развитие популяций. Метод 'macro'",
        result: NewPopulation(method, tmp[0])
      };
    case 1:
      console.log(`\nХромосома/индивид: ${risePopulationArray}:`)
      console.log(`\nЭволюционный поиск в хромосомах: ${Math.max(risePopulationArray)}`)
      return {
        selectedMethod: "Развитие популяций. Метод 'micro'",
        result: NewPopulation(method, Math.max(risePopulationArray))
      };
  }
}

const RisePopulation = (method) => {
  switch ( method ) {
    case 1:
      let array = [];
      let countMicro = Math.floor(Math.random() * 50);
      for (let i = 0; i < countMicro; i++) {
        array.push(Math.floor(Math.random() * 50));
      }
      return array;
    case 2:
      let tmp = [];
      let countMacro = Math.floor(Math.random() * 5);
      let countMacro2 = Math.floor(Math.random() * 50);
      for (let i = 0; i < countMacro; i++) {
        for (let j = 0; j < countMacro2; j++) {
          tmp.push(Math.floor(Math.random() * 50));
        }
      }
      return tmp;
    case 3:
      let mettmp = [];
      let countMeta =  Math.floor(Math.random() * 5);
      let countMeta2 = Math.floor(Math.random() * 5);
      let countMeta3 = Math.floor(Math.random() * 50);
      for (let i = 0; i < countMeta; i++) {
        for (let j = 0; j < countMeta2; j++) {
          for (let k = 0; k < countMeta3; k++) {
            mettmp.push(Math.floor(Math.random() * 50));
          }
        }
      }
      return mettmp;
  }
}

const NewPopulation = (method, mx) => {
  console.log('\n Итоговая популяция: ')
  switch ( method ) {
    case 3:
      let array = [];
      let countMicro = Math.floor(Math.random() * 50);
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          array.push(Math.floor(Math.random() * 50));
        }
      }
      return array;
    case 2:
      let tmp = [];
      let countMacro = Math.floor(Math.random() * 5);
      let countMacro2 = Math.floor(Math.random() * 50);
      for (let i = 0; i < countMacro; i++) {
        for (let j = 0; j < countMacro2; j++) {
          tmp.push(Math.floor(Math.random() * 50));
        }
      }
      return tmp;
    case 1:
      let mettmp = [];
      let countMeta =  Math.floor(Math.random() * 5);
      let countMeta2 = Math.floor(Math.random() * 5);
      let countMeta3 = Math.floor(Math.random() * 50);
      for (let i = 0; i < countMeta; i++) {
        for (let j = 0; j < countMeta2; j++) {
          for (let k = 0; k < countMeta3; k++) {
            mettmp.push(Math.floor(Math.random() * 50));
          }
        }
      }
      return mettmp;
  }
}
const SynthesisСhromosomeSpecies = () => {
  const number = Number(readline.question('Задайте количество элементов:'))
  const binarn = [];
  const numberGomo = [];
  const numberGetero = [];
  const lenArr = (Math.floor(Math.random() * number))

  for (let item = 0; item < lenArr; item++) {
    binarn.push(Math.floor(Math.random()));
  }

  for (let item = 0; item < lenArr; item++) {
    numberGomo.push(Math.floor(Math.random()));
  }

  for (let item = 0; item < lenArr; item++) {
    numberGetero.push(item + 1);
  }
  const randomNumber = () => {
    return Math.floor(Math.random() * 20)
  }
  const vector = [];
  for (let item = 0; item < number; item++) {
    vector.push([randomNumber(), randomNumber(), randomNumber()]);
  }

  return {
    selectedMethod: "Синтез различных видов хромосом'",
    result: `
      Числовая бинарная хромосома: ${binarn} \n
      Числовая гомологичная хромосома: ${numberGomo} \n
      Числовая негомологичная хромосома: ${numberGetero} \n
      Векторная хромосома: [ ${vector.map(item=>`<` + item + '>')} ] \n
    `
  }
}

//Одеяло
const blanket = () => {
  const number = Number(readline.question('Задайте количество элементов: '))
  const interval = Number(readline.question('Задайте диапазон изменения значений (одно число): '))
  const array = []
  for (let item = 0; item < number-1; item++) {
    array.push(interval/(2*number)+interval/number*item)
  }
  return array
}

//Дробовик
const shotgun = () => {
  const number = Number(readline.question('Задайте количество элементов:'))
  const arrayRandomNumber = []
  for (let item = 0; item < number; item++) {
    arrayRandomNumber.push(Math.floor(Math.random() * 100))
  }
  const array = []
  const count = (Math.floor(Math.random() * arrayRandomNumber.length));
  for (let item = 0; item < count; item++) {
    array.push(arrayRandomNumber[(Math.floor(Math.random() * arrayRandomNumber.length))])
  }
  return array;
}

//Фокусировка
const focusing = () => {
  const number = Number(readline.question('Задайте количество элементов:'))
  const sizePopulation = Number(readline.question('Задайте размер популяции:'))

  const focusingPoint = sizePopulation * 0.25 + (Math.floor(Math.random() * (sizePopulation * 0.25)))
  const displacementAmount = focusingPoint / (2 * number)

  const array = []

  for (let item = 0; item < number/2; item++) {
    const displacementFunc = 2 * item + displacementAmount;
    if (focusingPoint + displacementFunc < sizePopulation) {
      array.push(focusingPoint + displacementFunc)
    }
  }

  for (let item = number/2; item < number; item++) {
    const displacementFunc = 2 * (item - number / 2 + 1) + displacementAmount;
    if (focusingPoint - displacementFunc >= 0) {
      array.push(focusingPoint - displacementFunc)
    }
  }

  return array;
}

const chunk = () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  let dia = (readline.question('Введите границы выбранного диапазона (например: 0 10): ')).split(" ")
  return array.slice(dia[0],dia[1]);
}

const lengthArr = (ls) => {
  let mx = 0;
  let index = 0;
  for (let item = 0; item < ls.length; item++) {
    if (ls[item].length > mx) {
      mx = ls[item].length
      index = item
    }
  }
  return [Math.max(ls[index]), index]
}
const { selectedMethod, result } = SelectMethod();
console.log(`\nВыбранные опции: ${selectedMethod}`)
console.log(`Результат: ${result}`)
