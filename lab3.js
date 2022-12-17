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

const risePopulation = (condition) => {
  switch (condition) {
    case "micro":
      let array = [];
      let countMicro = Math.floor(Math.random() * 25);
      for (let i = 0; i < countMicro; i++) {
        array.push(Math.floor(Math.random() * 25));
      }
      return array;
    case "macro":
      let tmp = [];
      let countMacro = Math.floor(Math.random() * 5);
      let countMacro2 = Math.floor(Math.random() * 25);
      for (let i = 0; i < countMacro; i++) {
        for (let j = 0; j < countMacro2; j++) {
          tmp.push(Math.floor(Math.random() * 25));
        }
      }
      return tmp;
    case "meta":
      let mettmp = [];
      let countMeta =  Math.floor(Math.random() * 5);
      let countMeta2 = Math.floor(Math.random() * 5);
      let countMeta3 = Math.floor(Math.random() * 25);
      for (i = 0; i < countMeta; i++) {
        for (j = 0; j < countMeta2; j++) {
          for (k = 0; k < countMeta3; k++) {
            mettmp.push(Math.floor(Math.random() * 25));
          }
        }
      }
      console.log(mettmp)
      return mettmp;
  }
}

const ResultProgram = (method) => {
  switch (method){
    case 1:
     return CreatePopulation()
    case 2:
      console.log(method)
      break
    default:
      console.log('Проверьте введенные данные')
  }
}

const CreatePopulation = () => {
  switch (
    Number(readline.question('Выберите метод\n' +
      '1. "Одеяло" \n' +
      '2. "Дробовик" \n' +
      '3. "Фокусировка" \n' +
      '3. "Комбинированный" \n' +
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
  console.log("Комбинированный прицнип выбора конкретного участка хромосомы");
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  dia = (readline.question('Введите границы диапазона: ')).split(" ")
  console.log(array.slice(dia[0],dia[1]))
  return array.slice(dia[0],dia[1]);
}


const { selectedMethod, result } = SelectMethod();
console.log(`Выбранные опции: ${selectedMethod}`)
console.log(  `Результат: ${result}`)
