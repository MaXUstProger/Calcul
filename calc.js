const calc = document.querySelector('.calc'); //вешаем обработчик на калькулятор
const result = document.querySelector('#result'); //получаем введенные данные

calc.addEventListener('click', function(event) {
  if(!event.target.classList.contains('calc__btn')) return; //проверять таргет события на наличие у него класса .calc__btn.
                                                            //если такого класса нет, то выходим из функции

  const value = event.target.innerText; //значения кнопок

switch(value) {

  case 'C':
    result.innerText = '';
    break;

  case '=':
    // Проверка выражения на допустимые символы
    if(result.innerText.search(/[^0-9*/+-]/mi) != -1) return;
    //исполнение выражения
    result.innerText = eval(result.innerText).toFixed(2);
    break;

  case '√':
    result.innerText = Math.sqrt(eval(result.innerText)).toFixed(2);
    //result.innerText это конкретное число
    //result.innerText после знака "=" указывается что нужно сделать с введенным значением в поле result
    break;
  
  case 'π':
    result.innerText = 3.14;
    //result.innerText это конкретное число
    //result.innerText после знака "=" указывается что нужно сделать с введенным значением в поле result
    break;

    case 'n²':
    result.innerText = result.innerText**2;
    //result.innerText это конкретное число
    //result.innerText после знака "n²" указывается что нужно сделать с введенным значением в поле result
    break;

  case '!':
    function factorial(n) {
      // Начальный результат будет равен 1,
      // чтобы его можно было умножать на последующие числа.
      // 0 подходит только для подсчёта суммы,
      // потому что умножение на 0 всегда даёт 0.
      var result = 1;
    
      for (var i = 0; i < n; i++) {
        // Так как наш счётчик начинается с 0
        // и растёт до n-1, нам нужно прибавить к нему
        // единицу, чтобы правильно рассчитать произведение.
        result *= i + 1;
      }
    
      return result; //возвращаем результат вычисления
    }
    result.innerText = factorial(result.innerText); //выводим результат вычисления в строке результатов
    break;

  default:
    result.innerText += value; //вывод значений в строку результатов
}
});
