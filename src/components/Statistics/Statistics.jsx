import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from '../../utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  const bgcColors = stats.map(() => ({
    backgroundColor: getRandomColor(),
  }));

  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map((stat, index) => (
            <li className={css.item} style={bgcColors[index]} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
