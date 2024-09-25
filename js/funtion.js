//NOT FLOAT VALUE
function getInputValue1(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
// FLOAT VALUE
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber;
}

function getBalance(id) {
    const balanceAmount = document.getElementById(id).innerText;
    const balanceAmountNumber = parseFloat(balanceAmount);
    return balanceAmountNumber;
}
// change of button color
function btnColorChange(id) {
    document.getElementById("btn-1").classList.remove("bottle-green");
    document.getElementById("btn-2").classList.remove("bottle-green");

    document.getElementById(id).classList.add("bottle-green");

}
//section change
function displaySection(id) {
    document.getElementById('first-section').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    //show section with called id

    document.getElementById(id).classList.remove('hidden');
    return;

}

//validation of input value
// Validate the donation amount:
//     - If the donation amount is greater than the account balance.
//     - If the input field contains an invalid number.
//     - If the input field is empty.
//  inputValidation(inputValue, initialAccountBalance);
// function inputValidation(num1, num2) {
//     if(num1 > num2 || isNaN(num1) || num1 == '') {
//         alert('Invalid input value!');
//         return;
//     }

// }