import React from 'react'

export default function Search(props) {
  return (
    <div>
      <span>Search by Title</span><br/>
      <input type="text" onChange={props.handleSearch}/>
    </div>
  )
}
