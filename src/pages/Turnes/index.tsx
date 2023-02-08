import styles from './Turnes.module.scss';
import turnes from 'data/turnes.json';

export default function Turnes() {
  return (
    <div className={styles.padrao}>
      <h1>
        Ashes of Lorem anuncia turnês épicas pelo mundo: Iron Tour of the UK, Harvest of Souls, March of the
        Warriors e The Metal Storm of Japan
      </h1>
      <p>
        Atenção fãs de heavy metal! A Ashes of Lorem está preparando algo épico para vocês nos próximos anos.
        Com o sucesso de sua música e apresentações incendiárias, a banda está embarcando em uma turnê pelo
        mundo inteiro, levando a sua mensagem de paixão pelo heavy metal para as massas.
      </p>
      <p>
        Em 2023, a Ashes of Lorem vai para a Grã-Bretanha com a turnê &apos;Iron Tour of the UK&apos;. Eles vão tocar em
        algumas das mais prestigiosas casas de shows do Reino Unido e prometem apresentações épicas e
        inesquecíveis.
      </p>

      <p>
        No ano seguinte, em 2024, a banda segue para a Alemanha com &apos;Harvest of Souls&apos;. Lá, eles vão apresentar
        seu som poderoso e incendiário para os fãs alemães, que já estão animados para a turnê.
      </p>
      <p>
        Em 2025, a Ashes of Lorem leva sua música para a França com a turnê &apos;March of the Warriors&apos;. Com suas
        letras intensas e ritmos intensos, eles vão causar uma verdadeira tempestade de metal pelo país.
      </p>
      <p>
        Por fim, em 2026, a banda segue para o Japão com a turnê &apos;The Metal Storm of Japan&apos;. Lá, eles vão tocar
        para os fãs mais apaixonados do heavy metal, que já estão ansiosos para ver a Ashes of Lorem em ação.
      </p>
      <p>
        Não perca a chance de ver a Ashes of Lorem ao vivo em uma dessas turnês épicas. Mantenha-se atento às
        datas e lugares para garantir seu lugar na história do heavy metal!
      </p>
      <div className={styles.datas}>
        <ul>
          {turnes.map((turne, index) => (
            <li key={index}>
              {turne.data} - {turne.nome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}