import MenuPrincipal from "./MenuPrincipal";
import style from "./Navbar.module.scss";

export default function NavBar() {
    
    return (
        <ul className={style.navbar}>
            <li><a href="sobre.html">Home</a></li>
            <li><MenuPrincipal/></li>
            <li><a href="sobre.html">Sobre</a></li>
            <li><a href="galeria.html">Galeria</a></li>
        </ul>
    )
}