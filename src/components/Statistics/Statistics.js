import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'


function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul className={css.stat__list}>
            <li className={css.stat__item}>Good: {good}</li>
            <li className={css.stat__item}>Neutral: {neutral}</li>
            <li className={css.stat__item}>Bad: {bad}</li>
            <div className={css.stat__total}>
            <li className={css.stat_total__item}>Total: { total }</li>
            <li className={css.stat_total__item}>Positive feedback: { positivePercentage }%</li></div>
      </ul>
  )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}


export default Statistics;