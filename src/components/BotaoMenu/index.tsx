import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './BotaoMenu.module.scss';

interface Props{
    onClick: () => void;
    onBlur: ()=> void;
}
export default function BotaoMenu({ onClick, onBlur }: Props) {
    
  return (
    <button className={style.botao} onClick={onClick} onBlur={onBlur} >
      <FontAwesomeIcon icon="bars" color="white" size="2x" />
    </button>
  );
}