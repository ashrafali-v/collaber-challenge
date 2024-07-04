
import styles from "../page.module.scss";
import Calculator from "../components/Calculator"
export default function Page() {
  return (
    <div className={styles.center}>
      <Calculator />
    </div>
  )
}