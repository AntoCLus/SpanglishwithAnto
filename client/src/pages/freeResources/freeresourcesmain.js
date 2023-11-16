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
        <h2 className='fr'></h2>
        <ul>
          {spanishExercises.map((exercise) => (
            <li key={exercise.id}>{exercise.title}</li>
          ))}
        </ul>
        <h1 className='fr'>Spanish exercises sites:</h1>
        <a className='fr-link' href='https://espanol.lingolia.com/en/' target='_blank' rel='noopener noreferrer'>
        Lingolia
      </a>
      <p></p>
      <a className='fr-link' href='https://lingua.com/spanish/' target='_blank' rel='noopener noreferrer'>
        Lingua
      </a>
      </div>

      <div>
        <h2 className='fr'></h2>
        <ul>
          {englishExercises.map((exercise) => (
            <li key={exercise.id}>{exercise.title}</li>
          ))}
        </ul>
        <h1 className='fr'>English exercises sites:</h1>
        <a className='fr-link' href='https://learnenglish.britishcouncil.org' target='_blank' rel='noopener noreferrer'>
        British Council Adults
      </a>
      <p></p>
      <a className='fr-link' href='https://learnenglishteens.britishcouncil.org' target='_blank' rel='noopener noreferrer'>
        British Council Teens
      </a>
      </div>
      <div>
      <h1 className='fr'>Practice your Spanish with AntoTeacher's book:</h1>
      <p className='frp'>+16 Age recommended</p>
        <a className='fr-link' href='https://www.amazon.com/Historias-vidas-y-muertes-Spanish-ebook/dp/B09C6HLMRJ/ref=sr_1_1?crid=1CZL68LJC02YI&keywords=historia+de+vidas+y+muertes+Antoclus&qid=1700164549&sprefix=historia+de+vidas+y+muertes+antoclu%2Caps%2C208&sr=8-1' target='_blank' rel='noopener noreferrer'>
        Historias de vidas y muertes
      </a>
      <p></p>
      </div>
      <div className='pictures'>
  <div className='picture3'>
    <p>1-1 lessons</p>
  </div>
  <div className='picture4'>
    <p>Group classes</p>
  </div>
</div>
  
    </div>
  );
};

export default FreeResources;