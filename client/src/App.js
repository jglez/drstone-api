import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import Docs from "./components/Docs.js";
import About from "./components/About.js"

function App() {
  return (
    <div>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
