import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'
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


const NewGame = () => {
  
  
  const [id, setId] = useState('');
    
  const getId = async () => {
  const { id } = await (await axios.get('http://localhost:3000/game')).data
  setId(id)
  }


  return (
    <CardContent>
          <h1>
          Create New Game
          </h1>
          <div>
        <label htmlFor="">Name</label>
        <Input type="text" name="" id=""/>
      </div>
      <Button onClick={getId}>CREATE</Button>
      <div>
        {id && <Link to={`/game/${id}`}>Navigate to Page</Link>}
      </div>
      </CardContent>  );
}

export default NewGame