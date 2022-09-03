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
      <div>
        <div className="main-container">
        <h3>Buttons</h3>
    
        <section className="button-layout">
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

            <div className="button-div">
              <p>{"<Button disabled variant=\"outline\"/>"}</p>
              <Button disabled variant="outline">Disabled</Button>
            </div>

        </section>
        <section className="button-layout">
            <div className="button-div">
              <p>{"<Button startIcon=\"settings\"/>"}</p>
              <Button startIcon="settings"> &nbsp; Default </Button>
            </div>
            
            <div className="button-div">
              <p>{"<Button endIcon=\"settings\"/>"}</p>
              <Button endIcon="settings"> Default &nbsp;</Button>
            </div>

            <div className="button-div">
              <p>{"<Button startIcon=\"star\" variant=\"text\"/>"}</p>
              <Button startIcon="star" variant="text"> &nbsp; Default </Button>
            </div>
            
            <div className="button-div">
              <p>{"<Button endIcon=\"star\" variant=\"outline\" disabled/>"}</p>
              <Button endIcon="star" variant="outline" disabled> Disabled &nbsp;</Button>
            </div>
        </section>
        <section className="button-layout">
            <div className="button-div">
              <p>{"<Button size=\"sm\"/>"}</p>
              <Button size="sm"> Default </Button>
            </div>
            
            <div className="button-div">
              <p>{"<Button size=\"md\"/>"}</p>
              <Button size="md"> Default </Button>
            </div>

            <div className="button-div">
              <p>{"<Button size=\"lg\"/>"}</p>
              <Button size="lg"> Default </Button>
            </div>
        </section>
        <section className="button-layout">
            <div className="button-div">
              <p>{"<Button color=\"default\"/>"}</p>
              <Button color="default"> Default </Button>
            </div>
            
            <div className="button-div">
              <p>{"<Button color=\"primary\"/>"}</p>
              <Button color="primary"> Default </Button>
            </div>

            <div className="button-div">
              <p>{"<Button color=\"secondary\"/>"}</p>
              <Button color="secondary"> Default </Button>
            </div>

            <div className="button-div">
              <p>{"<Button color=\"danger\"/>"}</p>
              <Button color="danger"> Default </Button>
            </div>
        </section>
        <section className="button-layout">
            <div className="button-div">
              <p>{"<Button color=\"danger\" variant=\"outline\" size=\"lg\"/>"}</p>
              <Button color="danger" variant="outline" size="lg"> Default </Button>
            </div>
            
            <div className="button-div">
              <p>{"<Button color=\"secondary\" variant=\"text\" startIcon=\"close\"/>"}</p>
              <Button color="secondary" variant="text" startIcon="close"> Default </Button>
            </div>

            <div className="button-div">
              <p>{"<Button color=\"primary\" endIcon=\"autorenew\"/>"}</p>
              <Button color="primary" endIcon="autorenew"> Default </Button>
            </div>
        </section>
        <footer>
          <p>Icons: https://material.io/resources/icons/?style=round</p>
          <p id="creator-msg">created by Javier Romero - devChallenges.io</p>
        </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
