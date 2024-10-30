// Button.js
import React from 'react';

const Button = ({ text, onClick }) => (
  <button onClick={() => onClick(text)}>{text}</button>
);

export default Button;
