import style from './Rodape.module.scss';

export default function Rodape() {
    return(
        <footer className={style.rodape}>
            <p className={style.textoCentro}> 2023, desenvolvido por Leandro Soares<br/>
                <span>Ashes of Lorem é um nome usado para o site de uma banda ficticia, qualquer semelhança com alguma banda real é pura coincidência, e Todos os direitos são reservados aos respectivos donos</span>
            </p>
        </footer>
    )
}