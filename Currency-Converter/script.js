const rates = {
  USD: { INR: 83.21, EUR: 0.92, USD: 1 },
  INR: { USD: 0.012, EUR: 0.011, INR: 1 },
  EUR: { USD: 1.08, INR: 89.45, EUR: 1 },
};

function convert() {
  debugger
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("result").innerText = "Please enter a valid amount.";
    return;
  }

  const rate = rates[from][to];
  const converted = (amount * rate).toFixed(2);

  document.getElementById("result").innerText = `Result: ${getSymbol(to)} ${converted}`;
}

function getSymbol(currency) {
  debugger
  const symbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
  };
  return symbols[currency] || "";
}
