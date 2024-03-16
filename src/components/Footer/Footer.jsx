import styles from './Footer.module.css'

export default function Footer() {
  return <div className={styles.container}>
    <div><span>/airr studio</span></div>
    <div className={styles.arrowContainer}>
      <div className={styles.arrow}> </div>
    </div>
    <div>
      <span className={styles.mail}>airr.studio@gmail.com</span>
    </div>
  </div>
}