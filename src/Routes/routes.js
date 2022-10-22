import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Onu from "../Pages/Onu";
import Error from "../Pages/Error";

export default function Way() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="onu" element={<Onu />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
