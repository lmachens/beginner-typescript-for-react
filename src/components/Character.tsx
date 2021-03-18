import React from "react";

function Character({ name, image }) {
  return (
    <article>
      <h3>{name}</h3>
      <img src={image} alt="" />
    </article>
  );
}

export default Character;
