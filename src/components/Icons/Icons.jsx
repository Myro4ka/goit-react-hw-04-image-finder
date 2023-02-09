import PropTypes from 'prop-types';
import IconsSVG from './icons.svg';
import css from '../Searchbar/Searchbar.module.css';

export const Icons = ({ name }) => {
  return (
    <svg className={css.icon_search}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};

Icons.propTypes = {
  name: PropTypes.string.isRequired,
};
