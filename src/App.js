
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
import QSleeve from './Pages/ProductPages/QSleeve';
import LabAI from './Pages/ProductPages/LABAI';  
import HealMed from './Pages/ProductPages/HealMed';
import QubitIQ from './Pages/ProductPages/QubitIQ';
import QMag from './Pages/ProductPages/QMag';
import QMemory from './Pages/ProductPages/QMemory';
import QFolioPro from './Pages/ProductPages/QFoliopro';
import QKD from './Pages/ProductPages/QKD';
import ClAIms from './Pages/ProductPages/ClAIms';
import ChecQ from './Pages/ProductPages/ChecQ';


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
      <Route path="/Products/Qsleeve" element={<QSleeve />} />
      <Route path="/Products/LAB-AI" element={<LabAI />} />
      <Route path="/Products/HealMed" element={<HealMed />} />
      <Route path="/Products/QubitIQ" element={<QubitIQ />} />
      <Route path="/Products/QMag" element={<QMag />} />
      <Route path="/Products/QMemory" element={<QMemory  />} />
      <Route path="/Products/Q-Folio Pro" element={<QFolioPro />} />
      <Route path="/Products/EPS-QKD" element={<QKD />} />
      <Route path="/Products/CL(AI)MS" element={< ClAIms />} />
      
      <Route path="/Products/ChecQ" element={<ChecQ />} />

 

  </Routes>
  </BrowserRouter>

}

export default App;
