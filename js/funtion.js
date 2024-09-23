function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber =parseFloat(inputValue)
    return inputValueNumber;
}

function getBalance(id) {
    const balanceAmount = document.getElementById(id).innerText;
    const balanceAmountNumber = parseFloat(balanceAmount);
    return balanceAmountNumber;
}