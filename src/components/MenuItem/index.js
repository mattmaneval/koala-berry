import PropTypes from 'prop-types';

const MenuItem = ({ data }) => <p>{data.name}</p>;

MenuItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default MenuItem;
