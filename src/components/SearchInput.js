import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: inline-flex;
  border: 1px solid var(--text-color);
  border-radius: var(--border-radius);

  input {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    border: none;
    padding: 0.4em;
    flex-grow: 1;
  }
`;

function SearchInput({ value, onChange }) {
  return (
    <Label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search character"
      />
      <span>🔎</span>
    </Label>
  );
}

export default SearchInput;
