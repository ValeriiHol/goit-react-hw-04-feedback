import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

function Section({ title, children }) {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
