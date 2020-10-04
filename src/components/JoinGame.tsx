import React from 'react';
import { Button } from './common/Button';
import { Input } from './common/Input';
import { CardContent } from './common/CardContent';

const JoinGame = () => {
  return (
    <CardContent>
      <h1>Join Game</h1>
      <div>
        <label>Game Id</label>
        <Input type="text" name="" id="" />
      </div>
      <Button w100 >JOIN</Button>
    </CardContent>
  );
};

export default JoinGame;
