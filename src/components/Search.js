import React from 'react';
import styled from 'styled-components';

const Search = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updatePage(e.target.children[0].value);
    e.target.children[0].value = "";
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          required
        />
        <button type="submit">Search</button>
      </SearchForm>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  padding-top: 19vh;
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 400px) {
    padding-top: 14vh;
  }

  @media (min-width: 700px) {
    padding-top: 10vh;
  }
`;

const SearchForm = styled.form`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #a13941ff;
  border-radius: 5px;
  margin-bottom: 1.5rem;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    padding: 0.5rem;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 50%;
    background-color: #a13941ff;
    border: none;
    color: #fcf6f5ff;
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export default Search;
