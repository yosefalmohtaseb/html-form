import "./App.css";
import Counters from "./components/counter/Counters";
import Image from "./components/image/Image";
import About from "./pages/aboutPage/About";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <About />
      <Image
        titel="Man"
        background
        src={
          "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"
        } */}
      {/* /> */}
      <Counters/>
    </div>
  );
}

export default App;
