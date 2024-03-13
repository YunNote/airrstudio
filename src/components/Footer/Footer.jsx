import styles from './Footer.module.css'

export default function Footer() {
  return <div className={styles.container}>

    <div className={styles.footerHead}>
      <div>contact airr</div>
      <div>note</div>
    </div>

    <div className={styles.contact}>
      <p><span>instagram : @airr.studio</span></p>
      <p><span>phone : +82.10.4847.8370</span></p>
      <p><span>mail : airr.studio@gmail.com</span></p>
      <p><span>notion : https://tinted-glade-884.notion.site/airr-studio-Park-Minseo-Portfolio</span></p>
    </div>
  </div>
}