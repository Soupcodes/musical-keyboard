import React, { Component } from "react";
import Key from "./Keys";

class Keyboard extends Component {
  state = {
    keys: [
      {
        key: "a",
        note: (
          <audio
            data-key="65"
            src="../sound files/Fnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "s",
        note: (
          <audio
            data-key="83"
            src="../sound files/FSharpnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "d",
        note: (
          <audio
            data-key="68"
            src="../sound files/Gnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "f",
        note: (
          <audio
            data-key="70"
            src="../sound files/GSharpnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "g",
        note: (
          <audio
            data-key="71"
            src="../sound files/Anote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "h",
        note: (
          <audio
            data-key="72"
            src="../sound files/ASharpnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "j",
        note: (
          <audio
            data-key="74"
            src="../sound files/Bnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "k",
        note: (
          <audio
            data-key="75"
            src="../sound files/Cnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "l",
        note: (
          <audio
            data-key="76"
            src="../sound files/CSharpnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: ";",
        note: (
          <audio
            data-key="59"
            src="../sound files/Dnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "'",
        note: (
          <audio
            data-key="222"
            src="../sound files/DSharpnote.wav"
            type="audio/wav"
          />
        )
      },
      {
        key: "#",
        note: (
          <audio
            data-key="163"
            src="../sound files/Enote.wav"
            type="audio/wav"
          />
        )
      }
    ],
    playing: false
  };

  render() {
    return (
      <section className="musical-keyboard">
        {this.state.keys.map(key => {
          return (
            <Key
              key={key.key}
              className={key.key}
              note={key.note}
              playAudio={this.playAudio}
            />
          );
        })}
      </section>
    );
  }

  playAudio = event => {
    console.log(event, "EVENT");
    let audio;
    this.state.keys.forEach(key => {
      if (event === key.key) {
        console.log(key.note, "FILEPATH in loop");
        //does this take the element or object Object by deleting .src??
        audio = new Audio(key.note.props.src);
      }
    });
    console.log(audio, "AUDIO");
    console.log(event, "KEYPRESSED");
    audio.play();
  };
}

export default Keyboard;
