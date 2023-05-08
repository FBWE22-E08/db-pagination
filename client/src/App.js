import { Route, Routes } from "react-router-dom";

import Landing from "./components/Landing";
import Listings from "./components/Listings";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/listings" element={<Listings />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
