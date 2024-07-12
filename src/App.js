import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/react"  element={<Home/>}></Route>
        <Route path="/About"  element={<About/>}></Route>
        <Route path="/Shop"  element={<Shop/>}></Route>
        <Route path="/Contact"  element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
