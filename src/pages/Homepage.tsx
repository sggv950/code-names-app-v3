import React from "react";
import NewGame from "../components/NewGame";
import JoinGame from "../components/JoinGame";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  margin: 200px 200px;
  grid-auto-flow: column;
`;

const Card = styled.div`
  height: 30vh;
  width: 30vw;
  margin: auto 20px;
`;

const Homepage = () => {
  return (
    <div>
      <CardContainer>
        <Card>
          <NewGame />
        </Card>
        <Card>
          <JoinGame />
        </Card>
      </CardContainer>
    </div>
  );
};

export default Homepage;
