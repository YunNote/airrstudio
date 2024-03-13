import styles from './Header.module.css'

export default function Header() {
  return <div className={styles.container}>
    <div><span>airr studio</span></div>
    <div><span>portfolio</span></div>
    <div><span>contact</span></div>
  </div>
}