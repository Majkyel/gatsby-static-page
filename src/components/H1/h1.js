import styled from 'styled-components'
import colors from '../../utils/colors';
import typography from '../../utils/typography';

const H1 = styled.h1`
  font-size: ${typography.h1};
  color: ${({isBlack})=> isBlack ? colors.fontColors.black : colors.fontColors.white};
`

export default H1;
