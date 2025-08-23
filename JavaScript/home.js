// logOut Option
const logOut = document.getElementById("log-out").
addEventListener("click", function(){
   window.location.href = "../HTML/login.html"
})


// main Work

document.getElementById("add-money-btn")
.addEventListener("click", function(event){ 
    event.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-money").value)
    const pinNumber = document.getElementById("account-pin-number").value
    console.log(bank, accountNumber, addAmount, pinNumber);
})