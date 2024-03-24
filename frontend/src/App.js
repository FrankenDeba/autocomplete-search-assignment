import "./App.css";
import Search from "./components/Search";

function App() {
  function setInputText(value) {
    console.log(value);
  }
  return (
    <div className="App">
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
      <Search setInputText={setInputText} />
    </div>
  );
}

export default App;
