import React from "react";
import PaginationButton from "./PaginationButton";
import styled from "styled-components";

const Pagination = (props) => {
  const renderPrev = (page) =>
    page > 1 && (
      <PaginationButton
        value={"Previous"}
        page={props.page}
        updatePage={props.updatePage}
        input={props.input}
      />
    );

  const renderNext = (page, total) =>
    page < total && (
      <PaginationButton
        value={"Next"}
        page={props.page}
        updatePage={props.updatePage}
        input={props.input}
      />
    );

  return (
    <ButtonContainer>
      {renderPrev(props.page)}
      {renderNext(props.page, props.totalPages)}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default Pagination;
