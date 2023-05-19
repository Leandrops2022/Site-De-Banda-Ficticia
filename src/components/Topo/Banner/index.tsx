import style from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mudarAtivado } from 'store/reducers/ativado';
import { useDispatch } from 'react-redux';

export default function Banner() {
  const dispatch = useDispatch();
  return (
    <div className={style.banner}>
      <div className={style.datas}>
        <h3>20/12</h3>
      </div>
      <div className={style.datas}>
        <h3>30/12</h3>
      </div>
      <button
        className={style.botao}
        onClick={() => {
          dispatch(mudarAtivado());
        }}
      >
        <FontAwesomeIcon icon="bars" color="white" size="2x" />
      </button>
    </div>
  );
}