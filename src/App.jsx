import { useState } from "react";
import JokeCard from "./components/JokeCard.jsx";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [currentJoke, setCurrentJoke] = useState(0);

  const getJokes = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes"
      );

      const result = await response.json();

      console.log(result);

      setJokes(result.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  
  getJokes();
  

  return (
    <div className="app">
      <h1>😂 Joke Generator</h1>

      <p className="subtitle">
        हर बार एक नया मज़ेदार जोक!
      </p>

      {jokes.map((joke, index) => {
        if (index === currentJoke) {
          return <JokeCard key={joke.id} joke={joke} />;
        }

        return null;
      })}

      <button
        onClick={() => {
          setCurrentJoke(
            (prev) => (prev + 1) % jokes.length
          );
        }}
      >
        Generate New Joke
      </button>
    </div>
  );
}

export default App;