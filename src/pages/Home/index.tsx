import styles from './Home.module.scss';
import dados from 'data/dadosHome.json';

export default function Home() {
  return <div className={styles.principal}>
    {dados.map((elemento) => {
      return (
        <div key={elemento.id} className={styles.textosLaterais}>
          <h1>{elemento.titulo}</h1>
          <img src={elemento.imagem} alt="" />
          <p>{elemento.texto}</p>
        </div>);
    })}
  </div>;
}