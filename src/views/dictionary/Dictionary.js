// src/views/Dictionary.js
import React, { useState } from 'react';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      if (data.length > 0) {
        setDefinitions(data[0].meanings);
      } else {
        setDefinitions([{ definitions: [{ definition: 'Word not found' }] }]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="dictionary-container">
      <h1>Dictionary</h1>
      <div className="search-bar">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="definitions">
        {definitions.map((meaning, index) => (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <ul>
              {meaning.definitions.map((def, idx) => (
                <li key={idx}>{def.definition}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;




