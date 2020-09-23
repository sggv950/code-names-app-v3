import styled from "styled-components";

export const Button = styled.button`
  background-color: #c8f1c8;
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 60px;
  margin-top: 80px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #b4ecb4;
  }

  &:active {
    transform: translateY(1px);
  }
`;
