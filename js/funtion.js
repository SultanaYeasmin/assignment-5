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

function btnColorChange(id){
document.getElementById("btn-1").classList.remove("bottle-green");
document.getElementById("btn-2").classList.remove("bottle-green");

document.getElementById(id).classList.add("bottle-green");

}
function displaySection (id){
    document.getElementById('first-section').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    
    //show section with called id
    
    document.getElementById(id).classList.remove('hidden');
    return;
    
    }