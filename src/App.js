import React from "react";
import Background from "./Background";
import Container from "./Container";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  return (
    <div>
      <Navbar />
      <Background>
        <Container>
          <Main />
        </Container>
      </Background>
    </div>
  );
}

export default App;
