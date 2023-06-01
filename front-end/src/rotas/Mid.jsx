import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './mid.css';

const Home = () => {
  // Estado para armazenar os dados dos alunos
  const [data, setData] = useState([]);

  useEffect(() => {
    // Busca os dados dos alunos ao carregar o componente
    axios
      .get('http://127.0.0.1:8000/alunos/')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    // Função para lidar com a exclusão de um aluno
    axios
      .delete(`http://127.0.0.1:8000/alunos/${id}/`)
      .then(() => renderizar())
      .catch((error) => console.log(error));
  };
return (
    <div className="container">
      <h1>Home</h1>
      <div className="square-container">
        {data.map((item) => (
          <div className="card" key={item.id} id={item.id}>
            <h3>{item.cpf}</h3>
            <h3>{item.nome}</h3>
            <h3>{item.email}</h3>
            <button onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="nav-bar">
        <div className="button-container">
          <a href={`/inicio/3`}>
            <button className="new-user-button">Voltar</button>
          </a>
          <a href={`/cadastro/1`}>
            <button className="back-button">Novo Usuario</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

