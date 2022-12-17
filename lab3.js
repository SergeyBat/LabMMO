// Реализация методов создания новой популяции
let readline = require('readline-sync');

const SelectMethod = () => {
  const method = Number(readline.question(
    'Выберите функцию: \n' +
    '1. Создание начальной популяции \n' +
    '2. Развитие популяций \n ' +
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
      '2. "Дробовик" \n ' +
      '3. "Фокусировка"\n' +
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
        result: blanket()
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
  for (let item = 0; item < (Math.floor(Math.random() * arrayRandomNumber.length)); item++) {
    array.push(arrayRandomNumber[(Math.floor(Math.random() * arrayRandomNumber.length))])
  }
  return array;
}


//Фокусировка



const { selectedMethod, result } = SelectMethod();
console.log(`Выбранные опции: ${selectedMethod}`)
console.log(  `Результат: ${result}`)
