import './App.css';
import { SignUp } from './components/SignUp';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import { Login } from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
    
    </Routes>
    </Router>
  );
}

export default App;
