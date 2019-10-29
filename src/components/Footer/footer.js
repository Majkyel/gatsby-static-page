import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const FooterContainer = styled.section`
  min-height: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray; /* do zmiany */
`;

const Footer = ({ footerText }) => (
  <FooterContainer>
    {footerText}
  </FooterContainer>
)

Footer.propTypes = {
  footerTitle: propTypes.string,
}

Footer.default = {
  footerTitle: '',
}

export default Footer;
