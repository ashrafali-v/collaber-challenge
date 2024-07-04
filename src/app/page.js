import styles from "./page.module.scss";
import NavBar from "./components/Navbar"
export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
    </main>
  );
}
