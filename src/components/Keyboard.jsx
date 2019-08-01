import React, { Component } from "react";
import Key from "./Keys";
import Akey from "../sound files/Anote.wav";
import ASharp from "../sound files/ASharpnote.wav";
import Bkey from "../sound files/Bnote.wav";
import Ckey from "../sound files/Cnote.wav";
import CSharp from "../sound files/CSharpnote.wav";
import Dkey from "../sound files/Dnote.wav";
import DSharp from "../sound files/DSharpnote.wav";
import Ekey from "../sound files/Enote.wav";
import Fkey from "../sound files/Fnote.wav";
import FSharp from "../sound files/FSharpnote.wav";
import Gkey from "../sound files/Gnote.wav";
import GSharp from "../sound files/GSharpnote.wav";

class Keyboard extends Component {
  state = {
    keys: [
      {
        key: "a",
        note: <audio data-key="65" src={Fkey} type="audio/wav" />
      },
      {
        key: "s",
        note: <audio data-key="83" src={FSharp} type="audio/wav" />
      },
      {
        key: "d",
        note: <audio data-key="68" src={Gkey} type="audio/wav" />
      },
      {
        key: "f",
        note: <audio data-key="70" src={GSharp} type="audio/wav" />
      },
      {
        key: "g",
        note: <audio data-key="71" src={Akey} type="audio/wav" />
      },
      {
        key: "h",
        note: <audio data-key="72" src={ASharp} type="audio/wav" />
      },
      {
        key: "j",
        note: <audio data-key="74" src={Bkey} type="audio/wav" />
      },
      {
        key: "k",
        note: <audio data-key="75" src={Ckey} type="audio/wav" />
      },
      {
        key: "l",
        note: <audio data-key="76" src={CSharp} type="audio/wav" />
      },
      {
        key: ";",
        note: <audio data-key="59" src={Dkey} type="audio/wav" />
      },
      {
        key: "'",
        note: <audio data-key="222" src={DSharp} type="audio/wav" />
      },
      {
        key: "#",
        note: <audio data-key="163" src={Ekey} type="audio/wav" />
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
