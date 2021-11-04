import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    props.updateInput(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updatePage(props.input);
    e.target.children[0].value = "";
    navigate(`/search/${props.input}`);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </SearchForm>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  padding-top: 6.5rem;
  display: flex;
  justify-content: center;
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
