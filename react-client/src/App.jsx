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
          <Route exact path="/addBrands" element={<Brands />} />
          <Route exact path="/brands" element={<MyBrands />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
