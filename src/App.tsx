import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult(NaN);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        {result !== null && <div className="result">= {result}</div>}
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default App;
