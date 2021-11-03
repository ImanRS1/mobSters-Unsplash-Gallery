import React from 'react'

const Search = (props) => {
  const handleSearch = e => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input').value;
    props.onChange(searchInput);
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="text" className="search-input" placeholder="Search..." required/>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
