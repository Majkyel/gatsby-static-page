import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../css/GlobalStyle"
import styled from 'styled-components'

const LayoutWrapper = styled.section`
  height: 100vh;
  background-color: white;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
