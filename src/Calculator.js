import React, { useState } from 'react';
import Button from './TButton';
import Display from './TDisplay';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(''); // Estado único para mostrar en el display
  const [result, setResult] = useState(null); // Estado para almacenar el resultado

  const handleClick = (value) => {
    setDisplayValue((prev) => prev + value); // Añadir el valor al display
  };

  const handleEquals = () => {
    try {
      const calculatedResult = eval(displayValue); // Evalúa la expresión
      setResult(calculatedResult);
      setDisplayValue(String(calculatedResult)); // Muestra el resultado en el display
    } catch {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue(''); // Limpia el display
    setResult(null); // Limpia el resultado
  };

  const handlePercentage = () => {
    try {
      const percentageResult = parseFloat(displayValue) / 100;
      setDisplayValue(String(percentageResult)); // Muestra el porcentaje en el display
    } catch {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <Display input={displayValue} result={result} /> {/* Muestra solo el valor en displayValue */}
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '='].map((text) =>
          text === '=' ? (
            <Button key={text} text={text} onClick={handleEquals} />
          ) : (
            <Button key={text} text={text} onClick={() => handleClick(text)} />
          )
        )}
        <Button text="%" onClick={handlePercentage} />
        <Button text="/" onClick={() => handleClick('/')} />
        <Button text="Clear" onClick={handleClear} />
      </div>
    </div>
  );
};

export default Calculator;
