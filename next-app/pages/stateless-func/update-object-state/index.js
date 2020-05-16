import React, {useState} from 'react';


/**
 * UpdateObjectOfState
 * @return {React} React Component
 */
export default function UpdateObjectOfState() {
  const [state, setState] = useState({
    button: [
      {title: '送出', content: 'www.google.com'},
      {title: '前往Yahoo', content: 'www.yahoo.com'},
    ],
  });
  const onChange = (event, index) => {
    const items = Object.assign({}, state);
    items.button[index][event.target.name] = event.target.value;
    setState(items);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <main>
        {state.button.map((item, index) => (
          <div key={item.title+index+'_div'}>
            <button key={item.title+index+'_button'}>{item.title}</button>
            <input
              key={item.title+index+'_input'}
              type="text"
              name="title"
              onChange={(event)=>onChange(event, index)}
              value={item.title}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
