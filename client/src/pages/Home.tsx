import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <img src="/voto.svg" alt="Voto" className={styles.logo} />
      <h1>voto</h1>
      <p>Group decision making made quick and easy</p>
    </div>
  );
}

export default Home;
