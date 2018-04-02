const add = () => {
  let number1 = document.getElementById('no_1').value;
  let number2 = document.getElementById('no_2').value;

  let result = Number(number1) + Number(number2);

  document.getElementById('result').value =result;
  return result;
}
// add();
