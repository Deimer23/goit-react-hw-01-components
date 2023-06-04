import PropsTypes from 'prop-types'
import style from "./TransactionHistory.module.css";

export const TransactionHistory = props => {
    const items = props.items;
  return (
    <table className={style["transaction-history"]}>
      <thead>
        <tr className={style['header-table']}>
          <th className={style['header-item']}>Type</th>
          <th className={style['header-item']}>Amount</th>
          <th className={style['header-item']}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {
            items.map(item => (
                <tr className={style['fila']} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))
        }                
      </tbody>
    </table>
  );
};

TransactionHistory.PropsTypes = {
  id: PropsTypes.string.isRequired,
  type: PropsTypes.string.isRequired,
  amount: PropsTypes.string.isRequired,
  currency: PropsTypes.string.isRequired
}
