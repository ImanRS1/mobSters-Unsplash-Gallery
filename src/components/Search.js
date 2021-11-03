import React from 'react'

const Search = (props) => {
  const handleChange = e => {
    e.preventDefault();
    props.updateInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.updatePage();
    e.target.children[0].value = '';
    props.getData(props.input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="search-input" placeholder="Search..." onChange={handleChange} required/>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
