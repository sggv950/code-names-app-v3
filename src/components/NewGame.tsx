import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.button`
font-family: sans-serif;
border-radius: 5px;
border: none;
`


const NewGame = () => {
  
  
  const [id, setId] = useState('');
    
  const getId = async () => {
  const { id } = await (await axios.get('http://localhost:3000/game')).data
  setId(id)
  }


  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="" id=""/>
      </div>
      <Button onClick={getId}>Create New Game</Button>
      <div>
        {id && <Link to={`/game/${id}`}>Navigate to Page</Link>}
      </div>
    </div>
  );
}

export default NewGame