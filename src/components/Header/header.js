import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import colors from "../../utils/colors";

const HeaderApp = styled.header`
  background-color: ${(isBlack)=> isBlack ? colors.backgroundColor.black : colors.backgroundColor.default};
  min-height: 40px;
  display: flex;
  padding: 5px 50px;
  justify-content: space-between;
`;

const Header = ({children}) => (
  <HeaderApp>
    {children}
  </HeaderApp>
)

export default Header;
