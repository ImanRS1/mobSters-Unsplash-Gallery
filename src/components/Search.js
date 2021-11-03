import React from 'react'

const Search = () => {
  return (
    <form onSubmit="#">
      <input type="text" placeholder="Search..." required/>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
