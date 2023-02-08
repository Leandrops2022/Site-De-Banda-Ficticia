import BotaoMenu from '../../BotaoMenu';
import style from './Banner.module.scss';
import Iprops from '../../../types/Iprops';

export default function Banner({ ativado, setAtivado }: Iprops) {

  function ativaMenu() {
    const condicoes = (setAtivado && window.innerWidth <= 900);
    if(setAtivado){
      condicoes? setAtivado(!ativado) : setAtivado(false);
    }
  }
  
  return (
    <div className={style.banner}>
      <div className={style.datas}>
        <h3>20/02</h3>
      </div>
      <div className={style.datas}>
        <h3>30/02</h3>
      </div>
      
      <BotaoMenu
        onClick={ativaMenu}
        onBlur={ativaMenu}
      />
    </div>
  );
}