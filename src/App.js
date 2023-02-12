import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
