import React from "react";
import styled from "styled-components";

const PaginationButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.textContent === ">") {
      return props.updatePage(props.input, props.page + 1);
    }
    return props.updatePage(props.input, props.page - 1);
  };

  return <PaginationBtn onClick={handleClick}>{props.value}</PaginationBtn>;
};

const PaginationBtn = styled.button`
  margin: 1rem;
  background-color: #a13941ff;
  border: none;
  color: #fcf6f5ff;
  font-size: 2rem;
  font-weight: bolder;
  width: 3.2rem;
  border-radius: 50%;
  padding: 0.5rem;
`;

export default PaginationButton;
