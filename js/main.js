const btnCE = document.querySelector('.ce')
const btnC = document.querySelector('.c')
const btnPercentage = document.querySelector('.percentage')
const btnDivision = document.querySelector('.division')
const btnMultiple = document.querySelector('.multiple')
const btnMinus = document.querySelector('.minus')
const btnPlus = document.querySelector('.plus')
const btnPlusMinus = document.querySelector('.plusMinus')
const btnComma = document.querySelector('.comma')
const btnEquals = document.querySelector('.equals')
const btnOne = document.querySelector('.one')
const btnTwo = document.querySelector('.two')
const btnThree = document.querySelector('.three')
const btnFour = document.querySelector('.four')
const btnFive = document.querySelector('.five')
const btnSix = document.querySelector('.six')
const btnSeven = document.querySelector('.seven')
const btnEigth = document.querySelector('.eigth')
const btnNine = document.querySelector('.nine')
const btnZero = document.querySelector('.zero')
const historyCal = document.querySelector('.history-cal')
const result = document.querySelector('.result span')

let calculation

// historyCal.textContent = ''
result.textContent = ''

let number1
let number2

btnOne.onclick = () => {historyCal.textContent += 1}
btnTwo.onclick = () => {historyCal.textContent += 2}
btnThree.onclick = () => {historyCal.textContent += 3}
btnFour.onclick = () => {historyCal.textContent += 4}
btnFive.onclick = () => {historyCal.textContent += 5}
btnSix.onclick = () => {historyCal.textContent += 6}
btnSeven.onclick = () => {historyCal.textContent += 7}
btnEigth.onclick = () => {historyCal.textContent += 8}
btnNine.onclick = () => {historyCal.textContent += 9}
btnZero.onclick = () => {historyCal.textContent += 0}
btnComma.onclick = () => {historyCal.textContent += ','}
// btnCE.onclick = () => {
//   const clearedHistoryCal = historyCal.textContent.substring(0, historyCal.textContent.lastIndexOf(''))
//   return clearedHistoryCal
//   }
btnC.onclick = () => {
  historyCal.textContent = ''
  result.textContent = ''}
// btnPlusMinus.onclick = () => {return historyCal.textContent += '-'}
btnPlus.onclick = () => {
  historyCal.textContent += ` + `
}
btnMinus.onclick = () => {historyCal.textContent += ` - `}
btnMultiple.onclick = () => {historyCal.textContent += ` x `}
btnDivision.onclick = () => {historyCal.textContent += ` ÷ `}
btnPercentage.onclick = () => {historyCal.textContent += `% `}
btnEquals.onclick = () => {
  console.dir(historyCal)
}


console.log(historyCal)

result.textContent = historyCal.textContent

const history = historyCal.textContent

// console.dir(r)