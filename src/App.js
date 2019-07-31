import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";

class App extends React.Component {
  state = {};

  render() {
    return (
      <section>
        <header className="title">Musical Keyboard</header>
        <Keyboard />
      </section>
    );
  }
}

export default App;
