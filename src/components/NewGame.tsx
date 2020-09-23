import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "./common/Button";
import { Input } from "./common/Input";
import { CardContent } from "./common/CardContent";


const NewGame = () => {
  const [id, setId] = useState<string>("");

  const getId = async () => {
    const { id } = await (await axios.get("http://localhost:3000/game")).data;
    setId(id);
  };

  return (
    <CardContent>
      <h1>Create New Game</h1>
      <div>
        <label htmlFor="">Name</label>
        <Input type="text" name="" id="" />
      </div>
      <Button onClick={getId}>CREATE</Button>
      <div>{id && <Link to={`/game/${id}`}>Navigate to Page</Link>}</div>
    </CardContent>
  );
};

export default NewGame;