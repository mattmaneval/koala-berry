import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const { fonts, space, color } = theme;

const MenuItemStyle = styled.div`
  font-family: ${fonts.heading};
  margin-bottom: 3em;

  .menu-item {
    &-name {
      color: ${color.background};
      margin-bottom: ${space.quarterSpace};
      font-size: 1.5em;
    }

    &-desc,
    &-options {
      color: ${color.foreground};
    }

    &-desc {
      letter-spacing: 0.025em;
      font-size: 1em;
      margin-bottom: ${space.halfSpace};
      line-height: 1.4em;
    }

    &-options {
      display: flex;
    }

    &-option {
      font-size: 0.875em;
      margin-right: ${space.halfSpace};

      span:first-of-type {
        margin-right: 0.5em;
      }
    }
  }
`;

const MenuItem = ({ data }) => (
  <MenuItemStyle>
    <div className="menu-item-name">{data.name}</div>
    {data.desc
      ? (
        <div className="menu-item-desc">{data.desc ? data.desc : null }</div>
      )
      : null }
    <div className="menu-item-options">
      {data.price.oneSize
        ? (
          <div className="menu-item-option">
            <span>{data.price.oneSize ? data.price.oneSize : null }</span>
          </div>
        )
        : null }
      {data.price.baby
        ? (
          <div className="menu-item-option">
            <span>Baby</span>
            <span>{data.price.baby ? data.price.baby : null }</span>
          </div>
        )
        : null }
      {data.price.sm
        ? (
          <div className="menu-item-option">
            <span>Sm</span>
            <span>{data.price.sm ? data.price.sm : null }</span>
          </div>
        )
        : null }
      {data.price.med
        ? (
          <div className="menu-item-option">
            <span>Med</span>
            <span>{data.price.med ? data.price.med : null }</span>
          </div>
        )
        : null }
      {data.price.lg
        ? (
          <div className="menu-item-option">
            <span>Lg</span>
            <span>{data.price.lg ? data.price.lg : null }</span>
          </div>
        )
        : null }
      {data.price.sgl
        ? (
          <div className="menu-item-option">
            <span>Single</span>
            <span>{data.price.sgl ? data.price.sgl : null }</span>
          </div>
        )
        : null }
      {data.price.dbl
        ? (
          <div className="menu-item-option">
            <span>Double</span>
            <span>{data.price.dbl ? data.price.dbl : null }</span>
          </div>
        )
        : null }
      {data.price.fam
        ? (
          <div className="menu-item-option">
            <span>Family</span>
            <span>{data.price.fam ? data.price.fam : null }</span>
          </div>
        )
        : null }
      {data.price.half
        ? (
          <div className="menu-item-option">
            <span>Half</span>
            <span>{data.price.half ? data.price.half : null }</span>
          </div>
        )
        : null }
      {data.price.whole
        ? (
          <div className="menu-item-option">
            <span>Whole</span>
            <span>{data.price.whole ? data.price.whole : null }</span>
          </div>
        )
        : null }
      {data.price.bucket
        ? (
          <div className="menu-item-option">
            <span>Bucket</span>
            <span>{data.price.bucket ? data.price.bucket : null }</span>
          </div>
        )
        : null }
    </div>
  </MenuItemStyle>
);

MenuItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    price: {
      baby: PropTypes.number,
      small: PropTypes.number,
      medium: PropTypes.number,
      large: PropTypes.number,
      sgl: PropTypes.number,
    },
  }).isRequired,
};

export default MenuItem;
