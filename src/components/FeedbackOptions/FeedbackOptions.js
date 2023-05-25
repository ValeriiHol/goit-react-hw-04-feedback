import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.button__list}>
      {options.map(option => (
        <button
          type="button"
          className={`${css.button} ${css[option]}`}
          style={{ backgroundColor: { option } }}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </ul>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
