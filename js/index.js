//blog.html 
document.getElementById("blog-1")
    .addEventListener("click", function () {
        window.location.href = '/blog.html';
        console.log('clicked');
    })

// //first section
document.getElementById("btn-11").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("first section");
    const inputValue = getInputValue("input-1");
    const initialAccountBalance = getBalance("balance-1");

    // input validation
    if (inputValue > initialAccountBalance || isNaN(inputValue) || inputValue == '') {
        alert('Invalid input value!');
        return;
    }  
        
        else{

        const initialBalance = getBalance("balance-2");
        const donationBalanceFinal = inputValue + initialBalance;
        //final donation value
        document.getElementById("balance-2").innerText = donationBalanceFinal;
        console.log("Input donation:", inputValue, "initial Donation balance:", initialBalance, "final balance:", donationBalanceFinal);
        
        //my account balance
        const accountBalance = initialAccountBalance - inputValue;
        document.getElementById("balance-1").innerText = accountBalance;
        console.log("initial account balance:", initialAccountBalance, "donation:", inputValue, "present Account balance:", accountBalance);
       
        // // history
        // first line
        const historyText = document.createElement("p");
        historyText.innerText = `
      ${inputValue} Donate for Flood at Noakhali, Bangladesh.
                              `;
        document.getElementById("first-line").appendChild(historyText);

        // second line
        const time = new Date();
        document.getElementById("second-line").innerHTML = time;
    }
 
})

//second section
document.getElementById("btn-12").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("second section");
    const inputValue = getInputValue("input-2");
    const initialAccountBalance = getBalance("balance-1");
    if (inputValue > initialAccountBalance || isNaN(inputValue) || inputValue == '') {
        alert('Invalid input value!');
        return;
    }  
        
        else{




    const initialBalance = getBalance("balance-3");


    //final donation value
    const donationBalanceFinal = inputValue + initialBalance;
    document.getElementById("balance-3").innerText = donationBalanceFinal;
    console.log("Input donation:", inputValue, "initial Donation balance:", initialBalance, "final balance:", donationBalanceFinal);

    //my account balance
    const accountBalance = initialAccountBalance - inputValue;
    document.getElementById("balance-1").innerText = accountBalance;
    console.log("initial account balance:", initialAccountBalance, "donation:", inputValue, "present Account balance:", accountBalance);


    // history
    // first line
    const historyText = document.createElement("p");
    historyText.innerText = `
    ${inputValue} Donate for Flood Relief in Feni,Bangladesh.
    `;
    document.getElementById("first-line").appendChild(historyText);

    // second line
    const time = new Date();
    document.getElementById("second-line").innerHTML = time;}
})

//Third section
document.getElementById("btn-13").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Third section");
    const inputValue = getInputValue("input-3");
    const initialAccountBalance = getBalance("balance-1");
    if (inputValue > initialAccountBalance || isNaN(inputValue) || inputValue == '') {
        alert('Invalid input value!');
        return;
    }  
        
        else{

    const initialBalance = getBalance("balance-4");
    const donationBalanceFinal = inputValue + initialBalance;
    //final donation value
    document.getElementById("balance-4").innerText = donationBalanceFinal;
    console.log("Input donation:", inputValue, "initial Donation balance:", initialBalance, "final balance:", donationBalanceFinal);

    //my account balance
    const accountBalance = initialAccountBalance - inputValue;
    document.getElementById("balance-1").innerText = accountBalance;
    console.log("initial account balance:", initialAccountBalance, "donation:", inputValue, "present Account balance:", accountBalance);
        
    // history
    // first line
    const historyText = document.createElement("p");
    historyText.innerText = `
     ${inputValue} Aid for Injured in the Quota Movement.
     `;
    document.getElementById("first-line").appendChild(historyText);

    // second line
    const time = new Date();
    document.getElementById("second-line").innerHTML = time;}
})
