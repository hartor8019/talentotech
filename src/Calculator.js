import React, { useState } from 'react';
import Button from './TButton';
import Display from './TDisplay';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleEquals = () => {
    try {
      setResult(eval(input)); // Evalúa la expresión; ten cuidado al usar `eval`
      setInput(''); // Limpia el input después de calcular el resultado
    } catch {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handlePercentage = () => {
    setInput((prev) => String(parseFloat(prev) / 100));
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '='].map((text) =>
          text === '=' ? (
            <Button key={text} text={text} onClick={handleEquals} />
          ) : (
            <Button key={text} text={text} onClick={handleClick} />
          )
        )}
        <Button text="%" onClick={handlePercentage} />
        <Button text="/" onClick={handleClick} />
        <Button text="Clear" onClick={handleClear} />
      </div>
    </div>
  );
};

export default Calculator;