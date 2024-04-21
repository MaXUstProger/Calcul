const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function(event) {
  if(!event.target.classList.contains('calc__btn')) return;

  const value = event.target.innerText;

switch(value) {
  case 'C':
    result.innerText = '';
    break;
  case '=':
    // Проверка выражения
    if(result.innerText.search(/[^0-9*/+-√]/mi) != -1) return;
    result.innerText = eval(result.innerText).toFixed(2);
    break;

  case '√':
    result.innerText = Math.sqrt(eval(result.innerText)).toFixed(2);
    //result.innerText это конкретное число
    //result.innerText после знака "=" указывается что нужно сделать с введенным значением в поле result
    break;

  default:
    result.innerText += value;
}
});
