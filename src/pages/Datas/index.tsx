import styles from './Datas.module.scss';
import datas from 'data/datasShows.json';

export default function Datas() {
  return (
    <div className={styles.datas}>
      <h1>Confira as datas dos próximos shows pelo Brasil :</h1>
      <ul>
        {datas.map((local, index) => (
          <li key={index}>
            {local.data} - {local.cidade}
          </li>
        ))}
      </ul>
    </div>
  );
}