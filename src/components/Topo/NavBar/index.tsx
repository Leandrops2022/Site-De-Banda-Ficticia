import style from './Navbar.module.scss';
import {Link} from 'react-router-dom';

export default function NavBar() {
  const rotas = [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'Contato',
      to: 'contato'
    },
    {
      label: 'Turnês',
      to: 'turnes'
    },
    {
      label: 'Datas',
      to: 'datas'
    },
    {
      label: 'Galeria',
      to: 'galeria'
    },
    {
      label: 'Sobre',
      to: 'sobre'
    }
  ];
  return (
    <ul className={style.navbar}>
      {rotas.map((rota, index) => (
        <li key={index}>
          <Link to={rota.to}>
            {rota.label}
          </Link>
        </li>
      ))}
    </ul>

  );
}