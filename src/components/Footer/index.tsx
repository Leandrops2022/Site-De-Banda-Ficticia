import style from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.rodape}>
      <p className={style.textoCentro}> 2023, desenvolvido por Leandro Soares<br />
        <span>Ashes of Lorem é o nome de uma banda ficticia e qualquer semelhança com nomes de bandas reais é pura coincidência</span>
      </p>
    </footer>
  );
}