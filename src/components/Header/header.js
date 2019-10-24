import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const HeaderApp = styled.header`
  background-color: blue; /* do zmiany */
`;

const Header = ({ siteText }) => (
  <HeaderApp>
    <div>
      <h1>
        <Link to="/">
          {siteText}
        </Link>
      </h1>
    </div>
  </HeaderApp>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
