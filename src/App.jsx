import { useState } from "react";
import duckko from "./assets/duckko.gif";
import { Route, Routes } from "react-router";

import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <Header></Header>
      <NavBar></NavBar>

      <div>
        <a>
          <img src={duckko} className="duckLogo" alt="Duck Logo"></img>
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicker: {count}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </main>
  );
}

export default App;
