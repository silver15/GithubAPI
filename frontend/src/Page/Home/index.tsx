import { Link } from 'react-router-dom';
import ButtonIcon from '../../componentes/Button';
import './styles.css';

function Home() {
  return (
    <>
      <div className="card-conteiner">
        <div className="card-home">
          <div className="card-descricao">
            <h2>Desafio Github API</h2>
            <p>Bootcamp Spring React - DevSuperior</p>
          </div>
          <div className="btn">
            <Link to="/before">
            <ButtonIcon/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
