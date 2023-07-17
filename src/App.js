// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import Layout from './components/Layout';

export const MyContext = createContext()

function App() {
const [btnValue, serBtnValue] = useState('green')
  return (
    <div className="App">
      <MyContext.Provider value={{color: btnValue, setColor: serBtnValue}}>
        <Layout />
        <button onClick={() => serBtnValue('red')}>change color to red</button>
        <button onClick={() => serBtnValue('blue')}>change color to blue</button>
      </MyContext.Provider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
