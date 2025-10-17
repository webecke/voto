import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <img src="/voto.svg" alt="Voto" className={styles.logo} />
        <p className={styles.tagline}>Group decisions, made easy</p>
      </div>
      <p className={styles.comingSoon}>Coming Soon</p>
    </div>
  );
}

export default Home;
