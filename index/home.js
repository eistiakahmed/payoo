// logOut Option
const logOut = document
  .getElementById("log-out")
  .addEventListener("click", function () {
    window.location.href = "../login.html";
  });

// main Work

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const personAccountNumber = 15600648831;
    const pinNumbers = 1971;
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-money").value);
    const pinNumber = document.getElementById("account-pin-number").value;
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
      );

      const totalNewAvailableBalance = addAmount + availableBalance;
      document.getElementById("available-balance").innerHTML =
        totalNewAvailableBalance;

    if (personAccountNumber === accountNumber && pinNumbers === pinNumber) {
      return totalNewAvailableBalance;
    }
    if (accountNumber.length !== 11) {
      alert("Invaild Account Number");
    }
    if(( pinNumber.length !== 4)){
        alert("Invaild Pin")
    }
  });
