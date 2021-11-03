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
  display: flex;
  justify-content: center;
  background-color: #a13941ff;
`;

export default Footer;
