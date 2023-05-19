import Banner from './Banner';
import NavBar from './NavBar';
import styles from './Topo.module.scss';
import { useSelector } from 'react-redux';
import { IAtivado } from 'interfaces/IAtivado';


export default function Topo() {
  const ativado = useSelector((state: IAtivado) => state.ativado.estado);

  return (
    <header className={ativado
      ? styles['topo-completo']
      : styles.topo}
    >
      <Banner />
      <NavBar />
    </header>
  );
}