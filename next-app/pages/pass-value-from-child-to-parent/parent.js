import Head from 'next/head'
import Child from '../../components/Child';

export default function Parent() {
  const sendValueHandler = (wantedValue) => {
    console.log(wantedValue)
  }
  return (
    <div className="container">
      <main>
        <Child sendValue={sendValueHandler}/>
      </main>
    </div>
  )
}
