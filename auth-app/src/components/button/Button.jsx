import React from 'react';

const Button = ({ color, children, onClick }) => {
  const buttonStyle = {
    backgroundColor: color,
    width: '426px',
    height: '64px',
    borderRadius: '6px',
    margin: 'auto',

  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
