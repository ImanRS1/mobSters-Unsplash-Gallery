import React from "react";
import styled from "styled-components";

const PaginationButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.textContent === "Next") {
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
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
`;

export default PaginationButton;
