import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './components/Home';
import AddBook from './handleBooks/AddBook'

function App() {
  return(
  <Router>
  <Navbar/>
  
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/addBook" element={<AddBook/>}/>
    </Routes>
    
  </Router>
  )
  
}

export default App;
