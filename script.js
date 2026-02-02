// Initialize the TradingView Widget
new TradingView.widget({
  "width": "100%",
  "height": "100%",
  "symbol": "BINANCE:BTCUSDT",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "container_id": "main-chart-canvas"
});

// Simple logic to show indicator info when buttons are clicked
function addIndicator(type) {
    const tipText = document.getElementById('tip-text');
    if(type === 'RSI') {
        tipText.innerHTML = "<strong>RSI:</strong> Relative Strength Index. Above 70 is Overbought (Sell?), Below 30 is Oversold (Buy?).";
    } else if(type === 'MA') {
        tipText.innerHTML = "<strong>Moving Average:</strong> Smooths out price action. When price is above the MA, the trend is Bullish.";
    }
}
