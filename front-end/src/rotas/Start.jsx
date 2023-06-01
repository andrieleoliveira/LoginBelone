import React, { useState } from 'react';
import "./inicio.css"

// Componente de login
const Login = () => {
  // Estados para armazenar o nome de usuário, senha, erro e sucesso do login
  const [nomeDeUsuario, setNomeDeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const [erro, setErro] = useState('');
  const [loginSucesso, setLoginSucesso] = useState(false);

  // Função para lidar com a mudança do nome de usuário
  const handleNomeDeUsuarioChange = (event) => {
    setNomeDeUsuario(event.target.value);
  };

  // Função para lidar com a mudança da senha
  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  // Função para lidar com o envio do formulário de login
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se o nome de usuário e a senha correspondem aos valores esperados
    if (nomeDeUsuario === 'Barbara' && senha === '1ao5') {
      setLoginSucesso(true); setErro('');
    } else {
      setErro('Usuário ou senha inválidos'); setLoginSucesso(false);
    }
  };

  // Renderização do componente de login
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="label">Usuário: </label>
          <input style={style.input} type="text" id="username" value={nomeDeUsuario} onChange={handleNomeDeUsuarioChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input style={style.input} id="password" value={senha} onChange={handleSenhaChange}/>
        </div>
        <div>
          <button>Logar</button>
        </div>
        {erro && <p>{erro}</p>}
        <a href={`/telameio/2`}>
          {loginSucesso && <p>Login feito com sucesso. Clique aqui</p>}
        </a>
      </form>
    </div>
  );
};

export default Login;

const style = {
  input: {
    width: '65%',
    height: 25,
    backgroundColor: 'White',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
};
