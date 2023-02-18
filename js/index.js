import { Calculator } from "./calculator.js"
import { previousNumberTextElement, currentNumberTextElement, numberButton, operatorButton, equalsButton, resultTextElement, clearButton, clearEntryButton, percentageButton, minusPlusButton } from "./elements.js"

const calculator = new Calculator(previousNumberTextElement, currentNumberTextElement, resultTextElement)

export {calculator}

numberButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.apeendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operatorButton.forEach(button => {
  button.addEventListener('click', () => {
    let operator = ''
    if (button.classList.contains('division')) {
      operator = '÷'
    } else if (button.classList.contains('multiple')) {
      operator = 'x'
    } else if (button.classList.contains('minus')) {
      operator = '-'
    } else if (button.classList.contains('plus')) {
      operator = '+'
    } else {
      return
    }
    calculator.chooseOperatation(operator)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()

  })

clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
  })

clearEntryButton.addEventListener('click', () => {
    calculator.clearEntry()
    calculator.updateDisplay()
  })

percentageButton.addEventListener('click', () => {
    calculator.percentage()
    calculator.updateDisplay()
  })

minusPlusButton.addEventListener('click', () => {
    calculator.minusPlusToggle()
    calculator.updateDisplay()
  })



