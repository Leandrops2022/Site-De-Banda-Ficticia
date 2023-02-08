import style from './Corpo.module.scss';
import {Outlet} from 'react-router-dom';

interface Props {
  setAtivado?: React.Dispatch<React.SetStateAction<boolean>> | undefined
  }

export default function Corpo({ setAtivado }: Props) {
  function fechaMenuEmScrollEvent() {
    if(setAtivado){
      setAtivado(false);
    }
  }
  return (
    <div className={style.principal}>
      <div className={style.container}>
        <div className={style.content_wrapper} onTouchMove={fechaMenuEmScrollEvent}>
          <Outlet />
        </div>
        <footer className={style.rodape}>
          <p className={style.textoCentro}> 2023, desenvolvido por Leandro Soares<br />
            <span>Ashes of Lorem é o nome de uma banda ficticia e qualquer semelhança com nomes de bandas reais é pura coincidência</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
