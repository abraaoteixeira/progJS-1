import React, { useState } from 'react';
import axios from 'axios';

function TextInput() {
  const [text, setText] = useState('');
  const [concepts, setConcepts] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/process-text', { text });
      setConcepts(response.data.concepts);
    } catch (error) {
      console.error('Error processing text:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={handleChange} />
        <button type="submit">Process Text</button>
      </form>
      <div>
        {concepts.map((concept, index) => (
          <div key={index}>
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextInput;
