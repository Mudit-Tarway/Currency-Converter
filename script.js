// DropDowns for Country
var country = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "CNH", "COP", "CRC", "CUC", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR","PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMK", "ZMW"];

var option = "";
for (let i = 0; i < country.length; i++) {
    option += '<option value="' + country[i] + '">' + country[i] + "</option>";
}

document.getElementById('from-country-select').innerHTML = option;
document.getElementById('to-country-select').innerHTML = option;

// API Key
let url = 'https://api.exchangeratesapi.io/v1/latest?access_key=8fb7d18f7d8696fe2ae5cc7cff945edf';

async function currencyConverter() {
    let amount = parseFloat(document.getElementById("item02").value);
    let fromCurrency = document.getElementById("from-country-select").value;
    let toCurrency = document.getElementById("to-country-select").value;
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.rates) {
            let amountInEUR = amount / data.rates[fromCurrency];
            let convertedAmount = amountInEUR * data.rates[toCurrency];
            document.getElementById("item06").value = convertedAmount.toFixed(3);
        } else {
            alert("Exchange rates not available.");
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        alert("Failed to fetch exchange rates. Please try again.");
    }
}
document.getElementById("item05").addEventListener("click", currencyConverter);
