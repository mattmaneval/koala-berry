import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const { fonts, space, color } = theme;

const MenuItemStyle = styled.div`
  color: ${color.foregroundAlt};
  /* line-height: 1.5; */
  /* font-family: ${fonts.fontBold}; */
  /* font-size: 1.45em; */
  /* margin-bottom: 1em; */
`;

const MenuItem = ({ data }) => (
  <MenuItemStyle>
    <p>{data.name}</p>
  </MenuItemStyle>
);

export default MenuItem;
