//blog.html 
document.getElementById("blog-1")
    .addEventListener("click", function () {
        window.location.href = './blog.html';
        console.log('clicked');
    })

// //first section
document.getElementById("btn-11").addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue1 = getInputValue1("input-1");
    const inputValue = getInputValue("input-1");
    const initialAccountBalance = getBalance("balance-1");
    console.log("first section", inputValue1);
    // input validation
    if (inputValue1 > initialAccountBalance || isNaN(inputValue1) || inputValue1 === '' || inputValue1 <= 0) {
        document.getElementById("my_modal_1").classList.add("hidden");
        alert('Invalid input value!');
        return;
    }

    else {
        document.getElementById("my_modal_1").classList.remove("hidden");
        const initialBalance = getBalance("balance-2");
        const donationBalanceFinal = inputValue + initialBalance;
        //final donation value
        document.getElementById("balance-2").innerText = donationBalanceFinal;
        console.log("Input donation:", inputValue, "initial Donation balance:", initialBalance, "final balance:", donationBalanceFinal);

        //my account balance
        const accountBalance = initialAccountBalance - inputValue;
        document.getElementById("balance-1").innerText = accountBalance;
        console.log("initial account balance:", initialAccountBalance, "donation:", inputValue, "present Account balance:", accountBalance);

        // history
        const historyText = document.createElement("div");
        historyText.classList.add("border", "rounded-xl", "border-b-2", "p-2", "my-5")
        historyText.innerHTML = `
            <h3 class="font-bold text-xl mt-3"> ${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh.</h3>
            <p class="font-light text-base" id="second-line">Date: ${new Date()} </p>
           `;
        document.getElementById("history-container").appendChild(historyText);
    
    }

})

//second section
document.getElementById("btn-12").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("second section");
    const inputValue2 = getInputValue1("input-2");
    const inputValue = getInputValue("input-2");
    const initialAccountBalance = getBalance("balance-1");
    if (inputValue2 > initialAccountBalance || isNaN(inputValue2) || inputValue2 === '' || inputValue2 <= 0) {
        document.getElementById("my_modal_2").classList.add("hidden");
        alert('Invalid input value!');
       return;
       
    }

    else {
        document.getElementById("my_modal_2").classList.remove("hidden");
        const initialBalance = getBalance("balance-3");
        //final donation value
        const donationBalanceFinal = inputValue + initialBalance;
        document.getElementById("balance-3").innerText = donationBalanceFinal;
        console.log("Input donation:", inputValue, "initial Donation balance:", initialBalance, "final balance:", donationBalanceFinal);

        //my account balance
        const accountBalance = initialAccountBalance - inputValue;
        document.getElementById("balance-1").innerText = accountBalance;
        console.log("initial account balance:", initialAccountBalance, "donation:", inputValue, "present Account balance:", accountBalance);
        
        // history-2
        const historyText = document.createElement("div");
        historyText.classList.add("border", "rounded-xl", "border-b-2", "p-2", "my-5")
        historyText.innerHTML = `
            <h3 class="font-bold text-xl mt-3"> ${inputValue} Taka is Donated for Flood Relief at Feni, Bangladesh.</h3>
            <p class="font-light text-base" id="second-line">Date: ${new Date()} </p>
           `;
        document.getElementById("history-container").appendChild(historyText);}

    })

//Third section
document.getElementById("btn-13").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Third section");
    const inputValue3 = getInputValue1("input-3");
    const inputValue = getInputValue("input-3");
    const initialAccountBalance = getBalance("balance-1");
    if (inputValue3 > initialAccountBalance || isNaN(inputValue3) || inputValue3 === '' || inputValue3 <= 0) {
        alert('Invalid input value!');
        document.getElementById("my_modal_3").classList.add("hidden");
        return;
    }

    else {
        document.getElementById("my_modal_3").classList.remove("hidden");
        const initialBalance = getBalance("balance-4");
        const donationBalanceFinal = inputValue + initialBalance;
        //final donation value
        document.getElementById("balance-4").innerText = donationBalanceFinal;
        console.log("Input donation:", inputValue, "initial Donation balance:", initialBalance, "final balance:", donationBalanceFinal);

        //my account balance
        const accountBalance = initialAccountBalance - inputValue;
        document.getElementById("balance-1").innerText = accountBalance;
        console.log("initial account balance:", initialAccountBalance, "donation:", inputValue, "present Account balance:", accountBalance);

        // history-3
        const historyText = document.createElement("div");
        historyText.classList.add("border", "rounded-xl", "border-b-2", "p-2", "my-5")
        historyText.innerHTML = `
            <h3 class="font-bold text-xl mt-3"> ${inputValue} Taka is Donated for injured in the quota movement in Bangladesh.</h3>
            <p class="font-light text-base" id="second-line">Date: ${new Date()} </p>
           `;
        document.getElementById("history-container").appendChild(historyText);}
    
})
