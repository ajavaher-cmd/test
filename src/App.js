
import './App.css';
import TradingViewWidget from 'react-tradingview-widget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TradingViewWidget symbol="NASDAQ:AAPL" />
       
        
      </header>
    </div>
  );
}

export default App;
