import React from 'react';


/**
 * Child
 * For pass-value-from-child
 * @param {props}  props using pass value from parent
 * @return {React} React Component
 */
export default function Child(props) {
  const handleClick = () => {
    props.sendValue('Good Morning');
  };
  return (
    <div className="container">
      <button onClick={handleClick}>Send Value</button>
    </div>
  );
};
