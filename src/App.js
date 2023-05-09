import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Usuario from './pages/Usuario';

function App() {
  return (
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usuario' element={<Usuario />} />
      </Routes>
     </Router>
    
  );
}

export default App;
