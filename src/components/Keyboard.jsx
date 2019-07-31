import React, { Component } from "react";
import Key from "./Keys";

class Keyboard extends Component {
  state = {
    keys: [
      { key: "a", note: "../sound files/Fnote.m4a" },
      { key: "s", note: "../sound files/F#note.m4a" },
      { key: "d", note: "../sound files/Gnote.m4a" },
      { key: "f", note: "../sound files/G#note.m4a" },
      { key: "g", note: "../sound files/Anote.m4a" },
      { key: "h", note: "../sound files/A#note.m4a" },
      { key: "j", note: "../sound files/Bnote.m4a" },
      { key: "k", note: "../sound files/Cnote.m4a" },
      { key: "l", note: "../sound files/C#note.m4a" },
      { key: ";", note: "../sound files/Dnote.m4a" },
      { key: "'", note: "../sound files/D#note.m4a" },
      { key: "#", note: "../sound files/Enote.m4a" }
    ],
    playing: false
  };

  audio = new Audio(this.props.url);

  render() {
    return (
      <section className="musical-keyboard">
        {["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "#"].map(
          key => {
            return <Key key={key} className={key} playSound={this.playSound} />;
          }
        )}
      </section>
    );
  }

  playSound(event) {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }
}

export default Keyboard;
