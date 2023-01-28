import style from "./MenuPrincipal.module.scss";

export default function ManuPrincipal() {
    return (
        <div className={style.MenuPrincipal}>
            <span><a href="Contato.html"> Contato</a></span>
            <span><a href="Turnes.html">Turnês</a></span>
            <span><a href="Datas.html">Datas</a></span>
        </div>
    )
}