import styles from './Left.module.css'

export default function Left() {
  return <div className={styles.left}>

    <div className={styles.intro}>
      <div>
        <p>uiux design studio</p>
        <p>park minseo</p>
        <p>+82.10.4847.8370</p>
        <p>airr.studio@gmail.com</p>
        <p>UIUX.web.app.logo</p>
      </div>

      <div className={styles.names}>
        <p>/aiir studio</p>
      </div>
    </div>

    <div className={styles.projects}>
      <ul>
        <li><div><span>캔디즈</span><span>2024.1 - 2</span></div></li>
        <li><div><span>원더로크</span><span>2023.11</span></div></li>
        <li><div><span>더글로우</span><span>2023.9 - 10</span></div></li>
        <li><div><span>애니바이옴</span><span>2023.7 - 8</span></div></li>
        <li><div><span>T world 리디자인</span><span>2023.7</span></div></li>
        <li><div><span>Medis_관리자</span><span>2023.6 - 7</span></div></li>
        <li><div><span>nomt.</span><span></span>2023.5 - 7</div></li>
        <li><div><span>OGQ GRAFOLIO</span><span>2023.1 - 7</span></div></li>
        <li><div><span>OGQ Creator Studio</span><span>2022.5 - 2022.12</span></div></li>
        <li><div><span>OCA admin</span><span>2022.5 - 2022.10</span></div></li>
        <li><div><span>BIGC.im</span><span>2021.12 - 2022.5</span></div></li>
        <li><div><span>세바시 스튜디오</span><span>2020.12 - 2021.1</span></div></li>
        <li><div><span>Naver OGQ market</span><span>2020.1 - 2020.11</span></div></li>
      </ul>

    </div>
  </div>
}