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
