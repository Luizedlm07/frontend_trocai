import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './FormLogin.css'

function FormLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

      const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          const response = await axios.get('https://trocai-api-gd42.onrender.com/usuario/login', {
            params: {
              email: email,
              senha: senha,
            },
          });
          console.log(response.data); // Manipule a resposta aqui
          if (response.status === 200) {
            navigate('/usuario')
          } else {
            setError('E-mail e/ou senha inválidos.')
          }
        } catch (error) {
          console.error(error); // Manipule o erro aqui

        }
      };

  return (
    <div className='body'>
      <div className='login-container'>
        <h1>Login</h1>
        { error && (<p className='error'>{error}</p>)}
        <form className='form-login' onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label><br/>
          <input type="email" className="email" name="email" placeholder="E-mail" onChange={(event) => setEmail(event.target.value)}/><br/>
          <label htmlFor="senha">Senha:</label><br/>
          <input type="password" className="senha" name="senha" placeholder="Senha" onChange={(event) => setSenha(event.target.value)}/><br/><br/>
          <input type="submit" value="Entrar"/>
        </form>

        <div className="links">
          <a href="/">Esqueci minha senha</a>
          <label htmlFor="lembrar-me">Lembrar-me</label>
          <input type="checkbox" className="lembrar-me" name="lembrar-me"/>
        </div>
        <div className="links">
          <p>Não possui conta?</p>
          <a href="/">Pois crie já!</a>
        </div>
      </div>
    </div>
  )
};

export default FormLogin;