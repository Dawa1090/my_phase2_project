
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'> 
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/cuisine' exact element={<Cuisine />}/>
        <Route path='/about' exact element={<About />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
