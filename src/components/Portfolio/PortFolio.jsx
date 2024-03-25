import styles from "@/components/Portfolio/PortFolio.module.css";

export default function PortFolio({portfolio : {id, title, thumbnail}}) {

  return <div>
    <p>{id}</p>
    <p>{title}</p>
    <img src={thumbnail} alt="이미지"/>
  </div>
}