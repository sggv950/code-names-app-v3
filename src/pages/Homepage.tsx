import React, { useState, useEffect } from 'react';
import NewGame from '../components/NewGame'
import JoinGame from '../components/JoinGame'
import axios from 'axios'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"


const Homepage = () => {

    const [id, setId] = useState('');

    useEffect(() => {
        const getId = async () => {
        const id = await (await axios.get('http://localhost:3000/game')).data.id
        setId(id)
        }
        getId()
    })

    
  return (
    <div>
        current id : {id}
      <NewGame />
      <JoinGame />
    </div>
  );
}   

export default Homepage