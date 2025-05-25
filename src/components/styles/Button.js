import styled from "styled-components";

export const Button = styled.button`
  display: block;
  background-color: #e50914;
  width: fit-content;
  height: fit-content;
  color: #fff;
  border: 0;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  border-radius: 3px;
  padding: 0.5em 1em;
  cursor: pointer;
`;
