import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => (
    <table className={css.transactionHistory}>
        <thead className={css.tableHeader}>
            <tr>
                <th className={css.tableType}>type</th>
                <th className={css.tableAmount}>amount</th>
                <th className={css.tableCurrency}>currency</th>
            </tr>
        </thead>
    <tbody>
      {
        items.map(({id, type, amount, currency}) => (
      <tr className={css.tr} key={id}>
          <td className={css.tableType}>{type}</td>
          <td className={css.tableAmount}>{amount}</td>
          <td className={css.tableCurrency}>{currency}</td>
      </tr>
      ))
      }
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};