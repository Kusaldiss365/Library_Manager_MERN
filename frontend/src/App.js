import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './components/Home';
import AddBook from './handleBooks/AddBook'
import EditBook from './handleBooks/EditBook';
import ViewBook from './handleBooks/ViewBook';

function App() {
  return(
  <Router>
  <Navbar/>
  
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/addbook" element={<AddBook/>}/>
      <Route exact path="/editbook" element={<EditBook/>}/>
      <Route exact path="/viewbook" element={<ViewBook/>}/>
    </Routes>
    
  </Router>
  )
  
}

export default App;
