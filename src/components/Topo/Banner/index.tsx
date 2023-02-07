import BotaoMenu from '../../BotaoMenu';
import style from './Banner.module.scss';
import Iprops from '../../../types/Iprops';

export default function Banner({ ativado, setAtivado }: Iprops) {

  function ativaMenu() {
    if(setAtivado && window.innerWidth <= 600) {
      setAtivado(!ativado);
    } else if (setAtivado){
      setAtivado(false);
    }
  }
  return (
    <div className={style.banner}>
      <h3 className={style.data1}>20/02</h3>
      <h1>Ashes of Lorem</h1>
      <h3 className={style.data2}>30/02</h3>
      <BotaoMenu
        onClick={ativaMenu}
      />
    </div>
  );
}