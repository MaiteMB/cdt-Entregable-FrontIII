import React from 'react';

function Card({ name, artist }) {
    return (
      <div className="Card">
        <h2>Hola {name},</h2>
        <p>A mí también me gusta mucho la música de {artist}, ¡que tengas un lindo día!</p>
      </div>
    );
  }

export default Card;
