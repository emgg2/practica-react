import React from 'react';
import classNames from 'classnames';

import './Input.css';


function Input({ className, label, ...props }) {
  return (
    <div
      className={classNames(
        'formField',
        { 'formField--focused': false },
        className
      )}
    >
      <label className="formField-label">
        <span>{label}</span>
        <input
          className="formField-input"
          autoComplete="off"
          {...props}
        ></input>
      </label>
    </div>
  );
}

export default Input;
