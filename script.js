// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const converterScreen = document.getElementById('converterScreen');
const countryInput = document.getElementById('countryInput');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const convertBtn = document.getElementById('convertBtn');
const exchangeBtn = document.getElementById('exchangeBtn');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

// Updated Exchange Rates (more accurate)
const exchangeRates = {
    USD: { USD: 1, EUR: 0.93, GBP: 0.79, INR: 83.29, JPY: 155.47, AUD: 1.52, CAD: 1.37 },
    EUR: { USD: 1.07, EUR: 1, GBP: 0.85, INR: 89.42, JPY: 166.82, AUD: 1.63, CAD: 1.47 },
    GBP: { USD: 1.26, EUR: 1.17, GBP: 1, INR: 105.17, JPY: 196.20, AUD: 1.92, CAD: 1.73 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, INR: 1, JPY: 1.87, AUD: 0.018, CAD: 0.016 },
    JPY: { USD: 0.0064, EUR: 0.0060, GBP: 0.0051, INR: 0.53, JPY: 1, AUD: 0.0098, CAD: 0.0088 },
    AUD: { USD: 0.66, EUR: 0.61, GBP: 0.52, INR: 54.92, JPY: 102.04, AUD: 1, CAD: 0.90 },
    CAD: { USD: 0.73, EUR: 0.68, GBP: 0.58, INR: 61.01, JPY: 113.42, AUD: 1.11, CAD: 1 }
};

// Event Listeners
startBtn.addEventListener('click', () => {
    if (countryInput.value.trim() === '') {
        alert('Please enter your country name');
        return;
    }
    welcomeScreen.style.display = 'none';
    converterScreen.style.display = 'flex';
    
    // Set default currency based on country
    setDefaultCurrency(countryInput.value.trim());
    convertCurrency(); // Convert immediately after setting currency
});

backBtn.addEventListener('click', () => {
    converterScreen.style.display = 'none';
    welcomeScreen.style.display = 'flex';
    countryInput.value = ''; // Reset country input
});

// Main conversion function
function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amt = parseFloat(amount.value);
    
    // Validate amount
    if (isNaN(amt) || amt < 0) {
        result.textContent = 'Please enter valid amount';
        return;
    }
    
    // Get the conversion rate
    const rate = exchangeRates[from][to];
    const convertedAmount = amt * rate;
    
    // Format the result with currency symbols
    const formattedResult = formatCurrency(convertedAmount, to);
    result.textContent = formattedResult;
}

// Helper function to format currency
function formatCurrency(amount, currencyCode) {
    const symbols = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        INR: '₹',
        JPY: '¥',
        AUD: 'A$',
        CAD: 'C$'
    };
    
    const symbol = symbols[currencyCode] || currencyCode + ' ';
    return symbol + amount.toFixed(2);
}

function swapCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    convertCurrency();
}

function setDefaultCurrency(country) {
    // Country to currency mapping (case-insensitive)
    const countryMap = {
        'usa': 'USD',
        'united states': 'USD',
        'america': 'USD',
        'india': 'INR',
        'uk': 'GBP',
        'united kingdom': 'GBP',
        'britain': 'GBP',
        'germany': 'EUR',
        'france': 'EUR',
        'spain': 'EUR',
        'italy': 'EUR',
        'europe': 'EUR',
        'japan': 'JPY',
        'australia': 'AUD',
        'canada': 'CAD'
    };
    
    const lowerCountry = country.toLowerCase();
    for (const [key, value] of Object.entries(countryMap)) {
        if (lowerCountry.includes(key)) {
            fromCurrency.value = value;
            return;
        }
    }
}

// Add event listeners for automatic conversion
convertBtn.addEventListener('click', convertCurrency);
exchangeBtn.addEventListener('click', swapCurrencies);
amount.addEventListener('input', convertCurrency);
fromCurrency.addEventListener('change', convertCurrency);
toCurrency.addEventListener('change', convertCurrency);

// Initial conversion when page loads
document.addEventListener('DOMContentLoaded', () => {
    convertCurrency();
});
