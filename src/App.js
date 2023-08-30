
import './App.css';
import About from './components/about/about';
import Create from './components/create/create';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <div className="App">
    <Navbar />
    </div>
    <div className='content'>
      <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
      </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;
