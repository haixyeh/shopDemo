import React from "react";
import PropTypes from 'prop-types';


const IconElement = {
  CloseGray:(props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path fill="none" fillRule="evenodd" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 10L3 3l7 7-7 7 7-7zm0 0l7 7-7-7 7-7-7 7z" />
    </svg>
  ),
  MenuDropdownArrow:(props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" d="M10.104 2.58a.66.66 0 0 1 .906 0c.247.24.247.64 0 .88l-.047.047-1.544 1.5-2.327 2.261-.751.729 1.147 1.115 1.163 1.13 1.164 1.131 1.2 1.166c.247.24.247.641 0 .881a.66.66 0 0 1-.907 0l-.047-.046-1.544-1.5L6.19 9.613l-1.2-1.167a.608.608 0 0 1-.156-.25l-.004-.012a.616.616 0 0 1 .155-.63l.048-.046 1.543-1.5 2.328-2.262 1.2-1.166z" transform="rotate(-90 8 8)" />
    </svg>
  )
};

const SVGIcon = props => {
  const { type, color, ...restProps } = props;
  if (color) restProps.fill = color;

  const Component = IconElement[type];
  return Component ? <Component {...restProps} /> : null;
};

SVGIcon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string
}

SVGIcon.defaultProps = {
  color: null
}

export default SVGIcon;