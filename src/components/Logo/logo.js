import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

const LogoWrapper = styled.div`
  max-width: 240px;
  padding: 15px;
  width: 100%;
`;

const MainLink = styled.a`
  text-decoration: none;
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      codetain: file(relativePath: { eq: "codetain.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
  <LogoWrapper>
      <MainLink href={'/'}>
        <Img fluid={data.codetain.childImageSharp.fluid} alt="codetain logo" />
      </MainLink>
  </LogoWrapper>
  )
}

export default Logo;
