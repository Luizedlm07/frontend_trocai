import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import InserirProduto from './pages/Login';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/inserir_item' element={<InserirProduto />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
     </Router>
    
  );
}

export default App;
