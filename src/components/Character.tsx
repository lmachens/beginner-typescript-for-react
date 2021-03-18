import React from "react";

type CharacterProps = {
  name: string;
  image: string;
};
function Character({ name, image }: CharacterProps) {
  return (
    <article>
      <h3>{name}</h3>
      <img src={image} alt="" />
    </article>
  );
}

export default Character;
