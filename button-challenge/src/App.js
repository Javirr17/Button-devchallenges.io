import './App.css';
import "./Button.jsx"
import Button from './Button.jsx';

function App() {
  return (
    <div className="App">
      <div className="left-navbar">
        <p id="title"><span>Dev</span>challenges.io</p>
        <div className="navbar-text-container">
          <p className="navbar-text">Colors</p>
          <p className="navbar-text">Typography</p>
          <p className="navbar-text">Spaces</p>
          <p className="navbar-text bold-text">Buttons</p>
          <p className="navbar-text">Inputs</p>
          <p className="navbar-text">Grid</p>
        </div>
      </div>
      <div className="main-div">
        <h3>Buttons</h3>
        <div className="button-container">
          <section className="main-buttons">
            <div className="button-div">
              <p>{"<Button />"}</p>
              <Button >Default</Button>
            </div>
            
            <div className="button-div">
              <p>{"<Button variant=\"outline\"/>"}</p>
              <Button variant="outline">Default</Button>
            </div>

            <div className="button-div">
              <p>{"<Button variant=\"text\"/>"}</p>
              <Button variant="text">Default</Button>
            </div>

            <div className="button-div">
              <p>{"<Button disableShadow/>"}</p>
              <Button disableShadow>Default</Button>
            </div>

            <div className="button-div">
              <p>{"<Button disabled/>"}</p>
              <Button disabled>Disabled</Button>
            </div>

          </section>
        </div>
        <footer>

        </footer>
      </div>
    </div>
  );
}

export default App;
