import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useFoo,toFoo,useCount,toCount, fromCount } from "./datagraph";
import { value,onChange,children,flow,fromEventValue, onClick, Input, Div, Button, Span } from "./util";
import './App.css'


// Counts
const CountJSX = ()=>{
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      jsx count is {count}
    </button>
  );
}

export const CountFP = Button(
  onClick(flow( fromCount, x => x+1, toCount )),
  children('fp count is ', useCount)
);



// Inputs
const InputJSX = ({value, setValue}: {value: string,setValue: (v: string) => void }) =>
  <input value={value} onChange={e => setValue(e.target.value) }/>;
const DisplayJSX = ({value}: {value: string}) => <span>{value}</span>;
const StateWrapperJSX = () => {
  const [val, setVal] = useState('foo');
  return (
    <>
      <InputJSX value={val} setValue={setVal} />
      <DisplayJSX value={val} />
    </>
  )
};

const InputFP = Input(
  value(useFoo),
  onChange(flow( fromEventValue, toFoo )),
);
const DisplayFP = Span(children(useFoo));



// App
function App() {
  const [shouldHide,setShouldHide]= useState(false);

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
      {/* <button onClick={e=>setShouldHide(!shouldHide)}>hide</button> */}
      {!shouldHide && (<div className="card">
        <h3>Count Buttons</h3>
        <p><CountJSX /> <CountFP/></p>
        <h3>Inputs</h3>
        <p><InputFP /> <DisplayFP /></p>
        <p><StateWrapperJSX/></p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>)}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>another foo displayed: TBD</div>
    </div>
  )
}

export default App
