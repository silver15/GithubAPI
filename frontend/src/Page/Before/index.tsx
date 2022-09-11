import { useState } from 'react';

import axios from 'axios';
import ResultCard from '../../componentes/ResultCard';
import './styles.css';

type FormData = {
  login: string;
};

type Profile = {
  url: string;
  name: string;
  location: string;
  followers: string;
  avatar_url: string;
};

function Before() {
  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.login}`)

      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="card-conteiner">
      <div className="card-home">
        <div className="card-descricao">
          <h2>Desafio Github API</h2>
          <p>Encontre um perfil Github</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={formData.login}
              className="seach-input"
              placeholder="Usuários GitHub"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
        {profile && (
          <>
            <div className="img-container"><img src={profile.avatar_url} alt="nome"/> </div>
            
            <ResultCard title="Perfil: " description={profile.url} />
            <ResultCard title="Nome: " description={profile.name} />
            <ResultCard title="Localidade: " description={profile.location} />
            <ResultCard title="Quantidade: " description={profile.followers} />
           </>
        )}
      </div>
    </div>
  );
}

export default Before;
