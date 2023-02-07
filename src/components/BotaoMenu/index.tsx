import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './BotaoMenu.module.scss';

interface Props{
    onClick: () => void;
}
export default function BotaoMenu({ onClick }: Props) {
    
  return (
    <button className={style.botao} onClick={onClick}>
      <FontAwesomeIcon icon="bars" color="white" size="2x" />
    </button>
  );
}