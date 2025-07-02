import React, { useState } from 'react';
import './Texttospeech.css';

function Texttospeech() {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    if (text.trim() !== '') {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    } else {
      alert('Nothing to speak!');
    }
  };

  return (
    <div className="container">
      <h3>Text To Speech Converter</h3>
      <textarea
        id="textToSpeech"
        placeholder="Enter here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleSpeak}>Submit</button>
    </div>
  );
}

export default Texttospeech;
