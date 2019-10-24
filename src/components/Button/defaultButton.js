import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

const DefaultButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: ${colors.buttonColors.primary};
  color: ${({isBlack})=> isBlack ? colors.fontColors.black : colors.fontColors.white};
  font-size: 1em; /* do zmiany do importu */
  height: 40px;
  width: 60px;
  padding: 5px;
  border-radius: 50px;
  border: none;
  text-decoration: none;
  :hover {
    box-shadow: 0 10px 20px -15px gray;
  }
`

const DefaultButton = ({children}) => {
  <DefaultButtonWrapper>
    {children}
  </DefaultButtonWrapper>
}

export default DefaultButton;
