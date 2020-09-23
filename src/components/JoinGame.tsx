import React from 'react';
import styled from 'styled-components'

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    height: 250px;
    align-items: center;
    box-shadow: 2px 2px 2px 2px #bbbaaf;
`

const Button = styled.button`
    background-color: #c8f1c8;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 60px;
    margin-top: 80px;
`
const Input = styled.input`
border-radius: 3px;
border-width: 1px;
margin: 0 20px;
`





const JoinGame = () => {
   
  return (
    <CardContent>
        <h1>Join Game</h1>
        <div>
      <label>Game Id</label>
      <Input type="text" name="" id=""/>
      </div>
      <Button>JOIN</Button>
      </CardContent>
  );
}

export default JoinGame