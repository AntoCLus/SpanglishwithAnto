import React, { useState } from 'react';
import axios from 'axios';
import "../pages.css"

const FreeResources = () => {
  const [spanishExercises, setSpanishExercises] = useState([]);
  const [englishExercises, setEnglishExercises] = useState([]);

  const fetchSpanishExercises = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=5&category=espanol');
      setSpanishExercises(response.data);
    } catch (error) {
      console.error('Error fetching Spanish exercises:', error);
    }
  };

  const fetchEnglishExercises = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=5&category=9&type=multiple');
      setEnglishExercises(response.data);
    } catch (error) {
      console.error('Error fetching English exercises:', error);
    }
  };

  return (
    <div className='fr-background'>
      <h1 className='fr'>Free Resources</h1>

      <div>
        <h2 className='fr'>Spanish Exercises</h2>
        <ul>
          {spanishExercises.map((exercise) => (
            <li key={exercise.id}>{exercise.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className='fr'>English Exercises</h2>
        <ul>
          {englishExercises.map((exercise) => (
            <li key={exercise.id}>{exercise.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FreeResources;