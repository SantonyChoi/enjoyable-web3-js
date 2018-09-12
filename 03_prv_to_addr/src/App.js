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
        <nav>Ethereum Prv to Addr</nav>
        <hr></hr>
        <div className="container">
          {this.entities.map(title => {
            return (
              <div>
                <Title title={title} />
                <input type="text" name={title} />
                <div className="empty-box" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
