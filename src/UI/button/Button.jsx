import React from "react";
import cls from './Button.module.css'

function Button({onClick, classButton, value}) {
  return (
    <button
      onClick={onClick}
      className={classButton ? cls[classButton] : cls.counter__button}>
      {value}
    </button>
  );
}

export default Button;
