import styles from "@/components/Portfolio/PortFolio.module.css";

export default function PortFolio({portfolio : {title, thumbnail, startDate, endDate}}) {

  return <div className={styles.container}>
    <div className={styles.header}>
      <div>
        <p>{title}</p>
      </div>

      <div>
        {startDate} - {endDate}
      </div>
    </div>
    <div className={styles.thumbnailHover}>
      <div className={styles.hoverWrap}>
        <p>{title}</p>
      </div>
      <img src={thumbnail} alt="이미지"/>
    </div>

  </div>
}