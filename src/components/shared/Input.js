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
      <div className="rowInput">      
        <div className="divLabel">{label}:</div>
        <div className="divInput"><input
          className="css-yk16xz-control"
          autoComplete="off"
          ref={inputRef}
          {...props}
        ></input></div>
      
      </div>
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
