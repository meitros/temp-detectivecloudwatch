import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

// helper - style buttons

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, path }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? styles[buttonStyle] : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? styles[buttonSize] : SIZES[0];

  return (
    <Link href={path} className="btn-mobile">
      <button
        className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      {/* <Button> Analyze Logs </Button> */}
    </Link>
  );
};
