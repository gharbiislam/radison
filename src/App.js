import './App.css';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import P404 from './pages/P404';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App bg-black flex items-start justify-center min-h-screen text-center ">
      <div className="container mx-5">
     
      <Router>
        <Routes>
        <Route path="/home" element={<Home/>} />
      <Route path="/comingsoon" element={<ComingSoon/>} />
         <Route path="/404" element={<P404/>} /> 
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
