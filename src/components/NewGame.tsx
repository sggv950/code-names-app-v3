import React, { useState } from 'react';
import { Button } from './common/Button';
import { Input } from './common/Input';
import { CardContent } from './common/CardContent';
import AddKeywordsModal from './AddKeywordsModal';


const NewGame = () => {
  const [showModal, updateShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    updateShowModal(!showModal);
  };

  return (
    <CardContent>
      {showModal ? <AddKeywordsModal onClose={toggleModal} /> : null}
      <h1>Create New Game</h1>
      <div>
        <label htmlFor="">Name</label>
        <Input type="text" name="" id="" />
      </div>
      <Button onClick={toggleModal} w100>CREATE</Button>
    </CardContent>
  );
};

export default NewGame;
