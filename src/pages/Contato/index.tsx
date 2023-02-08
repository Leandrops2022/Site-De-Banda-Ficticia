import styles from './Contato.module.scss';

export default function Contato() {
  return (
    <div className={styles.padrao}>
      <h1>Entre em contato conosco</h1>
      <p>
        Bem-vindo à assessoria de Ashes of Lorem, a banda de heavy metal que está dando o que falar na cena musical.
        Para entrar em contato conosco, você pode enviar um email para <b>ashes@lorem.com</b> ou ligar para nossa linha
        direta no número <b>(555) 555-5555</b>.
      </p>
      <p>
        Nosso time está sempre pronto para atender às suas solicitações e garantir que a banda tenha tudo o que
        precisa para se apresentar ao máximo. Se você é fã de heavy metal e quer saber mais sobre a Ashes of 
        Lorem, siga-nos em nossas redes sociais ou assine nossa newsletter enviando um email para
        <b> subscribe@lorem.com</b>.
      </p>
      <p>
        Não perca a chance de ficar por dentro das novidades e shows da banda mais incendiária da atualidade! 
        Aproveite nossos canais de comunicação e entre em contato conosco agora mesmo
      </p>
    </div>
  );
}