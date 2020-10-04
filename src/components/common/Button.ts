import styled from 'styled-components';

interface styledButtonProps {
  w100?: boolean;
}

export const Button = styled.button`
  background-color: #c8f1c8;
  border-radius: 5px;
  border: none;
  width: ${(props: styledButtonProps) => props.w100 ? '100%' : '200px'};
  height: 60px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #b4ecb4;
  }

  &:active {
    transform: translateY(1px);
  }
`;
