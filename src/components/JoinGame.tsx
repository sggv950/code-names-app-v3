import React from 'react';
import styled from 'styled-components'

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px #bbbaaf;
`

const Button = styled.button`
    position: relative;
    background-color: #c8f1c8;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 60px;
    margin-top: 46px;
`
const Input = styled.input`
border-radius: 3px;
border-width: 1px;
margin: 0 20px;
`





const JoinGame = () => {
   
  return (
    <CardContent>
      <div>
        <h1>Join Game</h1>
        </div>
        <div>
      <label>Game Id</label>
      <Input type="text" name="" id=""/>
      </div>
      <Button>JOIN</Button>
      </CardContent>
  );
}

export default JoinGame