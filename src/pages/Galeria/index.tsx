import fotos from 'data/fotosGaleria.json';
import styles from './Galeria.module.scss';

export default function Galeria() {
  return (
    <div className={styles.container}>
      <div className={styles.texto}>
        <h1>Galeria</h1>
      </div>
      <div className={styles.galeria}>
        {fotos.map((foto, index) => (
          <div className={styles.caixaFoto} key={index}>
            <img src={foto.url} alt={foto.nome} />
          </div>
        ))}

      </div>

    </div>
  );
}