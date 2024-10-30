// Display.js
import React from 'react';

const Display = ({ input, result }) => (
  <div className="display">
    <div className="input">{input}</div>
    <div className="result">{result}</div>
  </div>
);

export default Display;
