//first row
document.getElementById("btn-11").addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = getInputValue("input-1");
    const initialBalance = getBalance("balance-2");
    const donationBalanceFinal = inputValue + initialBalance;
    //final donation value
    document.getElementById("balance-2").innerText = donationBalanceFinal;
    console.log("Input donation:", inputValue, "initial Donation balance:", initialBalance, "final balance:", donationBalanceFinal);
    //my account balance
    const initialAccountBalance = getBalance("balance-1");
    const accountBalance = initialAccountBalance - inputValue;
    document.getElementById("balance-1").innerText = accountBalance;
    console.log("initial account balance:", initialAccountBalance, "donation:", inputValue, "present Account balance:", accountBalance);


    // history
    const historyText = document.createElement("div");
    historyText.innerHTML = `
    <h3 class="font-bold text-xl">   
     ${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh.</h3>
    <p class="font-light text-base">
    ${new Date().setFullYear(2024)} 
    </p>
    `;
    document.getElementById("history-container").appendChild(historyText);
})
