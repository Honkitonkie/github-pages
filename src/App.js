import React from "react";
import Card from "./Card";
import Call from "./Call";
import Background from "./Background";
import Container from "./Container";

function App() {
  return (
    <Background>
        <Container>
          <Card />
          <Call />
        </Container>
    </Background>
  );
}

export default App;
