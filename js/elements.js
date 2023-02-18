const numberButton = document.querySelectorAll('[data-number]')
const operatorButton = document.querySelectorAll('[data-operator]')
const clearEntryButton = document.querySelector('[data-ce]')
const clearButton = document.querySelector('[data-c]')
const equalsButton = document.querySelector('[data-equals]')
const previousNumberTextElement = document.querySelector('[data-previousNumber]')
const currentNumberTextElement = document.querySelector('[data-currentNumber]')
const resultTextElement = document.querySelector('[data-result]')
const percentageButton = document.querySelector('[data-percentage]')
const minusPlusButton = document.querySelector('[data-minusPlus]')

export {numberButton, operatorButton, clearButton, clearEntryButton, equalsButton, previousNumberTextElement, currentNumberTextElement, resultTextElement, percentageButton, minusPlusButton}