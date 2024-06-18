
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import QuantumAI from './Pages/QuantumAI';
import Partners from './Pages/Partners';
import Ourips from './Pages/Ourips';
import Resources from './Pages/Resources';
import Services from './Pages/Services'
import Marketfit from './Pages/Marketfit';


function App() {
  return <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Company/Aboutus" element={<Aboutus />} />
      <Route path="/Company/Contactus" element={<Contactus />} />
      <Route path="/Products/Quantum-AI" element={<QuantumAI />} />
      <Route path="/Products/Marketfit" element={<Marketfit />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Partners" element={<Partners />} />
      <Route path="/Ourip" element={<Ourips />} />
      <Route path="/Resources" element={<Resources />} />
 

  </Routes>
  </BrowserRouter>

}

export default App;
