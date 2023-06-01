import { useState } from 'react';
import axios from 'axios';

function App() {
  // Estados para armazenar o nome, email e CPF do usuário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  // Função assíncrona para adicionar um usuário
  async function addUser() {
    // Faz uma requisição POST para o endpoint '/alunos' com os dados do usuário
    const response = await axios.post('http://127.0.0.1:8000/alunos/', {
      nome: nome,
      email: email,
      cpf: cpf
    });
  }

  // Renderização do componente
  return (
    <>
      <h1>CADASTRO</h1>

      <input style={style.input} type="text" placeholder='Nome' onChange={(e) => setNome(e.target.value)} />
      <input style={style.input} type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input style={style.input} type="number" maxLength={11} placeholder='CPF' onChange={(e) => setCpf(e.target.value)} />
      <p></p>

      <a href={`/telameio/2`}><button onClick={addUser}>CADASTRAR</button></a>
      <a href={`/telameio/2`}><button>Voltar</button></a>
    </>
  );
}

export default App;

// Estilos do componente
const style = {
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'White',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
};
