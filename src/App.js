import './App.css';
import Waitlist from './pages/waitlist';
import Contact from "./pages/contact";
import About from "./pages/about";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Waitlist />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
