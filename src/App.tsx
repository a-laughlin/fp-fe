import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {useFoo, toFoo, useCount, toCount, fromCount } from "./datagraph";
import {value, onChange, children, flow, fromEventValue, onClick, Input, Div, Button, Span } from "./component-util";
import './App.css'


// Count JSX
const CountJSX = ()=>{
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      jsx count is {count}
    </button>
  );
}

// Count FP
export const CountFP = Button(
  onClick(flow( fromCount, x => x+1, toCount )),
  children('fp count is ', useCount)
);



// Input JSX
const InputJSX = ({value, setValue}: {value: string, setValue: (v: string) => void }) =>
  <input value={value} onChange={e => setValue(e.target.value) }/>;

const DisplayJSX = ({value}: {value: string}) => <span>{value}</span>;

const StateWrapperJSX = () => {
  const [val, setVal] = useState('foo');
  return (
    <>
      <InputJSX value={val} setValue={setVal} />&nbsp;
      <DisplayJSX value={val} />
    </>
  )
};

// Input FP
const InputFP = Input(
  value(useFoo),
  onChange(flow( fromEventValue, toFoo )),
);
const DisplayFP = Span(children(useFoo));


// App JSX (Added above components to vite's default. Didn't make an FP version)
export const App = ()=>
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
    <div className="card">
      <h3>Count Buttons</h3>
      <p><CountJSX /> <CountFP/></p>
      <h3>Inputs</h3>
      <p><StateWrapperJSX/></p>
      <p><InputFP /> <DisplayFP /></p>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
    <div>another foo displayed: TBD</div>
  </div>;

export default App
