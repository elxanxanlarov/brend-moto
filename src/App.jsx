import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
