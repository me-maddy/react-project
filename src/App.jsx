import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mentors from "./components/Mentors";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor" element={<Mentors />} />
          <Route path="/sign" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
