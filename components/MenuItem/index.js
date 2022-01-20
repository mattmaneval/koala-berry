import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const { fonts, space, color } = theme;

const MenuItemStyle = styled.div`
  color: ${color.foregroundAlt};
  line-height: 1.5;
  font-family: ${fonts.fontBold};
  font-size: 1.45em;
  margin-bottom: 1em;
`;

const MenuItem = ({ data }) => (
  <MenuItemStyle>
    <div className="title">{data.name}</div>
  </MenuItemStyle>
);

export default MenuItem;
