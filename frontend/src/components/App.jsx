import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import {Container} from "react-bootstrap";

function App() {
  return (
  <>
  <Header />
  <main className="py-3">
  <Container>
   <h1>hello world</h1>
  </Container>
  </main>
  <Footer />
  </>
  );
}

export default App;
