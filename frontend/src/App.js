import './App.css';
import { SignUp } from './components/SignUp';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<SignUp/>}></Route>
    
    </Routes>
    </Router>
  );
}

export default App;
