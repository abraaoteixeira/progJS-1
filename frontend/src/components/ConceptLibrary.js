import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ConceptLibrary() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('/topics');
        setTopics(response.data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div>
      <h2>Concept Library</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic._id}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <a href={`/visualization?topic=${topic._id}`}>View Visualization</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConceptLibrary;
