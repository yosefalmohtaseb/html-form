import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/media" element={<Media/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
