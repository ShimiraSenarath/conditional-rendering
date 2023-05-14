import Navbar from './Navbar';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom"
import Example1 from './pages/Example1';
import Example2 from './pages/Example2';
import Example3 from './pages/Example3';
import Example4 from './pages/Example4';

function App() {
  
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/example1" element={<Example1/>} />
        <Route path="/example2" element={<Example2/>} />
        <Route path="/example3" element={<Example3/>} />
        <Route path="/example4" element={<Example4/>} />
      </Routes>
    </div>
    </>
  )
}

export default App;
