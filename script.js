


const billAmountInput = document.getElementById('billAmount');
const totalAmountElement = document.getElementById('totalAmount');
const calculateButton = document.getElementsByClassName('calculateButton');

calculateButton.addEventListener('click', calculateTip);

function calculateTip(){
  const billAmount = parseFloat(billAmountInput.value);
  const tip = billAmount <= 400 && billAmount >= 50 ? billAmount * 0.20 : billAmount * 0.10;
  
  const totalAmount = billAmount + tip;
  
  const message = `Your bill is GH${billAmount}, your tip is GH${tip} and your total bill is GH${totalAmount}`;

  const messageSummary = totalAmount;

  totalAmountElement.placeholder= message;
}