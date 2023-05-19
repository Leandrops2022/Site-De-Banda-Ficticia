import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import rotas from 'data/rotasMenu.json';
import { mudarAtivado } from 'store/reducers/ativado';
import { useDispatch } from 'react-redux';

export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <ul className={style.navbar}>
      {rotas.map((rota, index) => (
        <li key={index}>
          <Link
            to={rota.to}
            onClick={() => {
              dispatch(mudarAtivado());
            }}
          >
            {rota.label}
          </Link>
        </li>
      ))}
    </ul>

  );
}