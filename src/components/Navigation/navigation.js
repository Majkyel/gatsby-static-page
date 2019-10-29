import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import colors from '../../utils/colors';
import typography from '../../utils/typography';

const ListNavigation = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  width: auto;
  justify-content: space-around;
  list-style-type: none;
`;

const ListElement = styled(Link)`
  padding: 2px;
  margin: 0px 15px;
  letter-spacing: 1px;
  color: ${colors.fontColors.white};
  font-size: ${typography.default};
  text-decoration: none;
`;

const Navigation = () => {
  return (
    <ListNavigation>
      <ListElement
        to="/about_us"
      >
        ABOUT US
      </ListElement>
      <ListElement
        to="/blog"
      >
        BLOG
      </ListElement>
      <ListElement
        to="/careers"
      >
        CAREERS
      </ListElement>
      <ListElement
        to="/contact"
      >
        CONTACT
      </ListElement>
    </ListNavigation>
  )
}

export default Navigation;
