import Banner from './Banner';
import NavBar from './NavBar';
import style from './Topo.module.scss';

interface Props{
    ativado?:boolean | undefined,
    setAtivado?: React.Dispatch<React.SetStateAction<boolean>> | undefined,
    classe?:string
}

export default function Topo ({ativado, setAtivado, classe}: Props) {
    
    return (
        <header className={classe}>
            <Banner 
                ativado={ativado}
                setAtivado={setAtivado}
            />
            <NavBar />
        </header>
    )
}