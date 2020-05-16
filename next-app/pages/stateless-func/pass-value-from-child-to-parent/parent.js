import React from 'react';
import Child from '../../../components/Child';

/**
 * Parent
 * @return {React} React Component
 */
export default function Parent() {
  const sendValueHandler = (wantedValue) => {
    console.log(wantedValue);
  };
  return (
    <div className="container">
      <main>
        <Child sendValue={sendValueHandler}/>
      </main>
    </div>
  );
}
