import React from 'react';
import classNames from 'classnames';
import pT from 'prop-types';

import './Input.css';


function Input({ className, label, autoFocus, ...props }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if(autoFocus) {
      inputRef.current.focus()
    }
    

  }, [])

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
          ref={inputRef}
          {...props}
        ></input>
      </label>
    </div>
  );
}

Input.propTypes = {
  className: pT.string,
  label: pT.string.isRequired,
  autoFocus: pT.bool,
}

Input.defaultProps = {
  autoFocus: false,
}


export default Input;
