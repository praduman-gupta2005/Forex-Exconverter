# Forex-Exconverter
file:///C:/Users/pawan/Downloads/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> FOREX RATE CONVERTER| Praduman Gupta</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="styles.css">

</div>
</head>
<body>
    <div class="particles" id="particles-js"></div>
    <div class="dashboard animate__animated animate__fadeIn">
        <h1><span class="currency-symbol">FOREX RATE CONVERTER<span class="currency-symbol"></span></h1>
        
        <div class="welcome-screen" id="welcomeScreen">
            <h2>Welcome to Professional FX Converter</h2>
            <p>Enter your country to begin currency conversion</p>
            <div class="input-group">
                <input type="text" class="country-input" id="countryInput" placeholder="e.g., India, USA, Japan...">
                <span class="input-icon">🌎</span>
            </div>
            <button class="btn" id="startBtn">
                <span>Start Converting</span>
                <span class="btn-icon">→</span>
            </button>
        </div>
        
        <div class="converter-screen" id="converterScreen">
            <div class="currency-box">
                <div class="select-wrapper">
                    <select id="fromCurrency" class="currency-select">
                        <option value="USD">US Dollar (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="GBP">British Pound (GBP)</option>
                        <option value="INR">Indian Rupee (INR)</option>
                        <option value="JPY">Japanese Yen (JPY)</option>
                        <option value="AUD">Australian Dollar (AUD)</option>
                        <option value="CAD">Canadian Dollar (CAD)</option>
                    </select>
                </div>
                <div class="input-wrapper">
                    <input type="number" id="amount" placeholder="Enter amount" value="1">
                    <span class="input-currency" id="fromCurrencySymbol">$</span>
                </div>
            </div>
            
            <button class="exchange-btn" id="exchangeBtn">
                <div class="exchange-icon">⇅</div>
                <div class="exchange-arrows">↑↓</div>
            </button>
            
            <div class="currency-box">
                <div class="select-wrapper">
                    <select id="toCurrency" class="currency-select">
                        <option value="EUR">Euro (EUR)</option>
                        <option value="USD">US Dollar (USD)</option>
                        <option value="GBP">British Pound (GBP)</option>
                        <option value="INR">Indian Rupee (INR)</option>
                        <option value="JPY">Japanese Yen (JPY)</option>
                        <option value="AUD">Australian Dollar (AUD)</option>
                        <option value="CAD">Canadian Dollar (CAD)</option>
                    </select>
                </div>
                <div class="result-container">
                    <div class="result" id="result">0.00</div>
                    <div class="result-currency" id="toCurrencySymbol">€</div>
                </div>
            </div>
            
            <div class="action-buttons">
                <button class="btn convert-btn" id="convertBtn">
                    <span>Convert Now</span>
                    <span class="btn-icon">⇨</span>
                </button>
                <button class="btn back-btn" id="backBtn">
                    <span>Change Country</span>
                    <span class="btn-icon">↩</span>
                </button>
            </div>
        </div>
        
        <div class="footer">
            <div>Built for Micro IIT Internship 2025</div>
            <div>Designed by Praduman Gupta</div>
            <div class="contact">Contact: <a href="mailto:pradumang965@gmail.com">pradumang965@gmail.com</a></div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
/* Professional FOREX Converter CSS */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #4361ee;      /* Vibrant blue */
  --secondary: #3a0ca3;    /* Deep purple-blue */
  --accent: #f72585;       /* Electric pink */
  --dark: #1a1a2e;         /* Dark navy */
  --light: #f8f9fa;        /* Clean white */
  --success: #4cc9f0;      /* Sky blue */
  --warning: #ff9e00;      /* Amber */
  --glass: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.25);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light);
  overflow: hidden;
  position: relative;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 30%, 
      rgba(67, 97, 238, 0.2) 0%, 
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%, 
      rgba(247, 37, 133, 0.2) 0%, 
      transparent 50%
    );
  z-index: 0;
}

.dashboard {
  background-color: var(--glass);
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-align: center;
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.dashboard::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg, 
    transparent, 
    rgba(255, 255, 255, 0.1), 
    transparent
  );
  transform: rotate(30deg);
  z-index: -1;
  animation: shine 8s infinite;
}

@keyframes shine {
  0% { transform: rotate(30deg) translate(-20%, -20%); }
  100% { transform: rotate(30deg) translate(20%, 20%); }
}

.brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.logo-image {
  max-width: 220px;
  filter: drop-shadow(0 0 12px rgba(247, 37, 133, 0.6));
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

h1 {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 600;
  background: linear-gradient(to right, #4cc9f0, #4361ee);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.5px;
}

.welcome-screen h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--light);
  font-weight: 500;
}

.welcome-screen p {
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.input-group {
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
}

.country-input,
.currency-input {
  width: 100%;
  padding: 1rem 1.25rem 1rem 3rem;
  border: none;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.country-input:focus,
.currency-input:focus {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(247, 37, 133, 0.3);
}

.country-input::placeholder,
.currency-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.input-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: var(--accent);
}

.btn {
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(67, 97, 238, 0.4);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--secondary), var(--primary));
  opacity: 0;
  transition: all 0.3s ease;
  z-index: -1;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(67, 97, 238, 0.6);
}

.btn:hover::before {
  opacity: 1;
}

.btn-icon {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.btn:hover .btn-icon {
  transform: translateX(5px);
}

.converter-screen {
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.currency-box {
  width: 100%;
  margin-bottom: 1rem;
}

.select-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.currency-select {
  width: 100%;
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.currency-select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(247, 37, 133, 0.3);
}

.select-wrapper::after {
  content: '▼';
  position: absolute;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  pointer-events: none;
}

.result-container {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.result {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.result-currency {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent);
}

.exchange-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 1rem 0;
  transition: all 0.3s ease;
}

.exchange-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(180deg);
}

.footer {
  margin-top: 2rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  line-height: 1.6;
}

.footer a {
  color: var(--accent);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer a:hover {
  text-decoration: underline;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .dashboard {
    padding: 1.5rem;
  }
  
  h1 {
    font-size: 1.5rem;
  }
  
  .logo-image {
    max-width: 180px;
  }
}
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
