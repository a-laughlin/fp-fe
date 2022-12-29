import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useFoo,toFoo,useCount,toCount, fromCount } from "./datagraph";
import { value,onChange,children,flow,fromEventValue, onClick, Input, Div, Button } from "./util";
import './App.css'

const CountJSX = ()=>{
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      jsx count is {count}
    </button>
  );
}

const InputFoo = Input(
  value(useFoo),
  onChange(flow(fromEventValue,toFoo)),
);

const DisplayFoo = Div(children(useFoo));

export const CountFP = Button(
  onClick(flow( fromCount, x => x+1, toCount )),
  children(()=>['fp count is ',useCount()])
);

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <InputFoo />
      <DisplayFoo />
      <div className="card">
        <p><CountJSX /></p>
        <p><CountFP/></p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
