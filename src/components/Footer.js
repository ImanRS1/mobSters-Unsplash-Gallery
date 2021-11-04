import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterS>
      <p>GitHub Icon</p>
    </FooterS>
  )
}

const FooterS = styled.footer`
  margin-top: 1.5rem;
  width: 100vw;
  height: 7vh;
  display: flex;
  justify-content: center;
  background-color: #a13941ff;
  position: absolute;
  bottom: 0;
`;

export default Footer;
