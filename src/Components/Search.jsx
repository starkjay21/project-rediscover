import React from 'react'
import ProfilePic from '../img/profile.jpg'

const Search = () => {
  return (
    <div className='search-container'>
      <input className='search-input' type="text" placeholder='Find a person'/>
      <div className='userChat'>
        <img src={ProfilePic} className='search-img' alt='profile-pic' />
        <p className='search-name'>Alan Rickman</p>
      </div>
    </div>
  )
}

export default Search