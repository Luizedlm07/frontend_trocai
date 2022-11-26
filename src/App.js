import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Equipe from './pages/Equipe';

function App() {
  return (
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='nossaequipe' element={<Equipe />} />
      </Routes>
     </Router>
    
  );
}

export default App;
