import styles from './Right.module.css'
import PortFolio from "@/components/Portfolio/PortFolio";

export default function Right({portfolios}) {

  let portfolioComponents = portfolios.map(portfolio => <PortFolio key={portfolio.id} portfolio={portfolio}/>);
  return <div className={styles.right}>
    {portfolioComponents}
  </div>
}