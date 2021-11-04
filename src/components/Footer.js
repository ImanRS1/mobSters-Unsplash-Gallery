import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterS>
      <a href="https://github.com/ImanRS1/mobSters-Unsplash-Gallery">
        <FontAwesomeIcon icon={faGithub} color="#fcf6f5ff" />
      </a>
    </FooterS>
  )
}

const FooterS = styled.footer`
  margin-top: 1.5rem;
  width: 100vw;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a13941ff;
  position: absolute;
  bottom: 0;
  font-size: 2.8rem;
`;

export default Footer;
