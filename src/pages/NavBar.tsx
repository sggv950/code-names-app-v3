import React from 'react';
import styled from 'styled-components';

const NavBarStyled = styled.div`
  height: 50px;
  padding:5px 20px;
  background-color: dodgerblue;
  color: #fff;
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
    
  return (
    <NavBarStyled>
      <div>LOGO</div>
      <div>Buttons</div>
    </NavBarStyled>
  );
}

export default NavBar;