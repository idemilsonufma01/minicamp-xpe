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
  var resultadoFaixa = '';
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcFaixa = document.querySelector('#imc-faixa');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calcularImc(weight, height);
  var firmattedImc = imc.toFixed(2);
  imcResult.textContent = firmattedImc;
  var firmattedImcNumber = Number(firmattedImc);

  if (firmattedImcNumber >= 16 && firmattedImcNumber < 17) {
    resultadoFaixa = 'Muito abaixo do peso';
  } else if (firmattedImcNumber >= 17 && firmattedImcNumber < 18.5) {
    resultadoFaixa = 'Abaixo do peso';
  } else if (firmattedImcNumber >= 18.5 && firmattedImcNumber < 25) {
    resultadoFaixa = 'Peso normal';
  } else if (firmattedImcNumber >= 25 && firmattedImcNumber < 30) {
    resultadoFaixa = 'Acima do peso';
  } else if (firmattedImcNumber >= 30 && firmattedImcNumber < 35) {
    resultadoFaixa = 'Obesidade grau I';
  } else if (firmattedImcNumber >= 35 && firmattedImcNumber < 40) {
    resultadoFaixa = 'Obesidade grau II';
  } else if (firmattedImcNumber >= 40) {
    resultadoFaixa = 'Obesidade grau III';
  } else {
    resultadoFaixa = 'Valor inválido';
  }
  imcFaixa.textContent = resultadoFaixa;
}

start();
