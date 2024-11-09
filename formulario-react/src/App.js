import React, { useState } from 'react';
import './App.css';
import Card from './Card'; 

function App() {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir que la página se recargue

    // Validación de los inputs
    if (name.length < 3 || name.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else if (artist.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setError('');
      setShowCard(true);
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Música</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Artista Favorito:
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showCard && (
        <Card name={name} artist={artist} />
      )}
    </div>
  );
}

export default App;

