import './FormCadastro.css'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function FormCadastro() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nome_completo: '',
    nome_usuario: '',
    email: '',
    confirmacao_email: '',
    senha: '',
    confirmacao_senha: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nome_completo, nome_usuario, email, confirmacao_email, senha, confirmacao_senha } = formValues;

    console.log(formValues)
    if (email === confirmacao_email && senha === confirmacao_senha) {
      try {
        const url = `http://localhost:8000/usuario/cadastrar_usuario?nome_completo=${encodeURIComponent(
          nome_completo
        )}&nome_usuario=${encodeURIComponent(nome_usuario)}&email=${encodeURIComponent(
          email
        )}&confirmacao_email=${encodeURIComponent(
          confirmacao_email
        )}&senha=${encodeURIComponent(senha)}&confirmacao_senha=${encodeURIComponent(confirmacao_senha)}`;
  
        const response = await axios.post(url);
        if (response.status === 200) {
          navigate('/usuario')
        }
        console.log(response.data);
        // Realize a ação necessária após o cadastro ser realizado com sucesso
      } catch (error) {
        console.error(error);
        // Realize a ação necessária em caso de erro no cadastro
      }
    } else {
      console.error('Email e senha não coincidem, favor revisar');
      // Realize a ação necessária caso o email e senha não coincidam
    }
  };

  return (
    <div className='body'>
      <div className='cadastro-container'>
        <h1>Cadastro</h1>
        <form className='form-cadastro'>
          <label className="label-cadastro" htmlFor="nome_completo">Nome completo: </label><br/>
          <input type="text" className="input-cadastro" value={formValues.nome_completo} onChange={handleInputChange} name="nome_completo" placeholder="Nome completo"/><br/>
          <label className="label-cadastro" htmlFor="nome_usuario">Nome de usuario: </label><br/>
          <input type="text" className="input-cadastro" value={formValues.nome_usuario} onChange={handleInputChange} name="nome_usuario" placeholder="Nome de usuario"/><br/>
          <label className="label-cadastro" htmlFor="email">E-mail:</label><br/>
          <input type="email" className="input-cadastro" value={formValues.email} onChange={handleInputChange} name="email" placeholder="E-mail"/><br/>
          <label className="label-cadastro" htmlFor="confirmacao_email">Confirmar E-mail:</label><br/>
          <input type="email" className="input-cadastro" value={formValues.confirmacao_email} onChange={handleInputChange} name="confirmacao_email" placeholder="Confirmar E-mail"/><br/>
          <label className="label-cadastro" htmlFor="senha">Senha:</label><br/>
          <input type="password" className="input-cadastro" value={formValues.senha} onChange={handleInputChange} name="senha" placeholder="Senha"/><br/>
          <label className="label-cadastro" htmlFor="confirmacao_senha">Confirmar senha:</label><br/>
          <input type="password" className="input-cadastro" value={formValues.confirmacao_senha} onChange={handleInputChange} name="confirmacao_senha" placeholder="Confirmar senha"/><br/><br/>
          <input type="submit" value="Cadastrar" onClick={handleSubmit}/>
        </form>
        <div className="links">
          <a href="/">Já tenho cadastro</a>
        </div>
      </div>
    </div>
  )
}

export default FormCadastro;