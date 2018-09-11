import React, { Component } from "react";
import "./App.css";

const Title = props => {
  return <div className="Title">{props.title}</div>;
};

class App extends Component {
  entities = ["Private Key", "Public Key", "Address"];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ethereum Prv to Addr</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.entities.map(title => {
          return (
            <div>
              <Title title={title} />
              <input type="text" name={title} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
