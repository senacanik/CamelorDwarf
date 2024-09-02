import React, { useState, useEffect } from 'react';

const App = () => {
  const [word, setWord] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomWord = Math.random() > 0.5 ? 'Deve' : 'Cüce';
      setWord(randomWord);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (choice) => {
    if (choice === word) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div className="container text-center">
      <h1 className="my-4">Deve Cüce Oyunu</h1>
      <h2>{word}</h2>
      <div className="my-3">
        <button className="btn btn-primary mx-2" onClick={() => handleClick('Deve')}>
          Deve
        </button>
        <button className="btn btn-danger mx-2" onClick={() => handleClick('Cüce')}>
          Cüce
        </button>
      </div>
      <h3>Puan: {score}</h3>
    </div>
  );
};

export default App;
