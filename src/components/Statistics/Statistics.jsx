import PropsTypes from "prop-types";
import style from "./Statistics.module.css";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

export function Statistics(props) {
  const datas = props.data;
  let tittle = "";    
  if (props.tittle !== undefined) {
    tittle = props.tittle;
  }
  return (
    <section className={style['statistics']}>
      {tittle.length > 0 && <h2>{tittle}</h2>}
      <ul className={style['stat-list']}>
        {datas.map(data => (          
          <li className={style['item']} style={{backgroundColor: getRandomHexColor()}} key={data.id}>
            <span>{data.label}</span><br/>            
            <span>{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.PropsTypes = {
  tittle: PropsTypes.string,
  id: PropsTypes.number.isRequired,
  label: PropsTypes.string.isRequired,
  percentage: PropsTypes.number.isRequired
}
