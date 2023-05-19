import style from './Corpo.module.scss';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mudarAtivado } from 'store/reducers/ativado';
import { IAtivado } from 'interfaces/IAtivado';


export default function Corpo() {
  const dispatch = useDispatch();

  const ativado = useSelector((state: IAtivado) => state.ativado.estado);

  function fechaMenuEmScrollEvent() {
    if (ativado) dispatch(mudarAtivado());
  }

  return (
    <div className={style.principal}>
      <div className={style.container}>
        <div
          className={style.content_wrapper}
          onTouchMove={(fechaMenuEmScrollEvent)}
          onClick={(fechaMenuEmScrollEvent)}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
