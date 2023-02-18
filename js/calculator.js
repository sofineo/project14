export class Calculator {
  constructor(previousNumberTextElement, currentNumberTextElement, resultTextElement){
    this.previousNumberTextElement = previousNumberTextElement
    this.currentNumberTextElement = currentNumberTextElement
    this.resultTextElement = resultTextElement
    this.clear()
  }

  clear() {
    this.previousNumber = ''
    this.currentNumber = ''
    this.results = ''
    this.operator = undefined
  }

  clearEntry() {
    if (this.results !== '') return
    this.currentNumber = this.currentNumber.toString().slice(0, -1)
  }

  reset() {
    this.currentNumber = this.results
    this.previousNumber = ''
    this.results = ''
    this.updateDisplay()
  }

  apeendNumber(number) {
    if (this.results !== '') {
      this.clear()
      this.updateDisplay()
    }
    if (this.currentNumber.toString().includes('.') && this.results !== '' && number === '.') return
    if (this.results !== '' && number == '.') {
      this.reset()
    }
    if (number === '.' && this.currentNumber.toString().includes('.') && this.results !== '') return
    if (number === '.' && this.currentNumber === '') {
      return this.currentNumber = '0.'
    }
    if (number === '.' && this.currentNumber !== '') {
      return this.currentNumber = this.currentNumber.toString() + '.'
    }
    this.currentNumber += number
  }

  chooseOperatation(operator) {
    if (this.currentNumber === '') return
    if (this.previousNumber !== '') {
      this.compute()
    }
    if (this.results !== '') {
      this.reset()
    }
    this.operator = operator
    this.previousNumber = this.currentNumber
    this.currentNumber = ''
  }

  compute() {
    let computation
    const num1 = parseFloat(this.previousNumber)
    const num2 = parseFloat(this.currentNumber)
    if (isNaN(num1) || isNaN(num2)) return
    switch(this.operator) {
      case '+':
        computation = num1 + num2
        break
      case '-':
        computation = num1 - num2
        break
      case 'x':
        computation = num1 * num2
        break
      case '÷':
        computation = num1 / num2
        break
      default:
        return
    }
    this.results = computation
    this.operator = undefined
  }

  getDisplayNumber(number) {
    const floatNumber = parseFloat(number)
    if (isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
  }

  updateDisplay() {
    if (this.currentNumber == '0.') {
      return this.currentNumberTextElement.innerText = this.currentNumber
    }
    if (this.currentNumber.toString().endsWith('.') && this.results == ''){
      return this.currentNumberTextElement.innerText = `${this.getDisplayNumber(this.currentNumber)}.`
    }
    this.currentNumberTextElement.innerText = this.getDisplayNumber(this.currentNumber)
    if (this.currentNumber !== null && this.operator !== undefined) {
      this.previousNumberTextElement.innerText = `${this.getDisplayNumber(this.previousNumber)}${this.operator} `
    } else if (this.currentNumber == '' || this.previousNumber == '') {
      this.previousNumberTextElement.innerText = this.getDisplayNumber(this.previousNumber)
    }
    this.resultTextElement.innerText = this.getDisplayNumber(this.results)
  }

  percentage() {
    if (this.results !== '') {
      this.reset()
    }
    this.currentNumber = parseFloat(this.currentNumber)/100
  }

  minusPlusToggle() {
    let index = Number(this.currentNumber.length) + 1
    if (this.results !== '') {
      this.reset()
      this.updateDisplay()
    }
    if (this.currentNumber.toString().includes('-')) {
      this.currentNumber = this.currentNumber.toString().replace('-','')
    } else {
      this.currentNumber = this.currentNumber.toString().padStart(index, '-')
    }
  }

}
