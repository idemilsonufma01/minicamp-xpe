function start() {
  var buttonCalculateImc = document.querySelector('#button-calcular-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
  handleButtonClick();
}

function calcularImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calcularImc(weight, height);
  var firmattedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = firmattedImc;
}

start();
