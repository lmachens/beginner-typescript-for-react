import React from "react";
import styled from "styled-components";

const statusToColor = {
  Alive: "green",
  Dead: "red",
  unknown: "darkgray",
};

type StatusProps = {
  status: "Alive" | "Dead" | "unknown";
};
const Status = styled.div<StatusProps>`
  width: 30px;
  height: 30px;
  background: ${(props) => statusToColor[props.status]};
  border-radius: 50%;
`;

type CharacterProps = {
  name: string;
  image: string;
  status: "Alive" | "Dead" | "unknown";
};
function Character({ name, image, status }: CharacterProps) {
  return (
    <article>
      <h3>{name}</h3>
      <img src={image} alt="" />
      <Status status={status} />
    </article>
  );
}

export default Character;
