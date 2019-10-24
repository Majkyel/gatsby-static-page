import styled from 'styled-components'
import colors from '../../utils/colors';

const H1 = styled.h1`
  font-size: ${ props => props.theme.h1}; /* wartosc do importu i do zmiany*/
  color: ${({isBlack})=> isBlack ? colors.fontColors.black : colors.fontColors.white};
`

export default H1;
