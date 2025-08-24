document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = 15600648831;
    const pin = 1971;
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const mobilePinValue = document.getElementById("mobile-pin").value;
    const mobileNumberPinConverted = parseInt(mobilePinValue);
    console.log(mobileNumberValueConverted, mobileNumberPinConverted);

    if (
      mobileNumberValueConverted === mobileNumber &&
      mobileNumberPinConverted === pin
    ) {
      window.location.href = "./home.html";
    } else {
      alert("Invaild credentials")
    }
  });
