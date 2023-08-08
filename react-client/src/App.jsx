import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Brands from "./components/brands/brands";
import NavBrands from "./components/brands/navBrands";
import MyBrands from "./components/brands/myBrands";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBrands />
        <Routes>
          <Route exact path="/" element={<MyBrands />} />
          <Route path="/addBrands" element={<Brands />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
