import styles from './Main.module.css'
import Left from "@/components/Left/Left";
import Right from "@/components/Right/Right";

export default function Main() {
  return (
      <div className={styles.mainContainer}>
        <Left/>
        <Right/>
      </div>
  );
}
