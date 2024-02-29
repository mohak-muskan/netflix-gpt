import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants'

const MovieCard = ({poster}) => {
  return (
    <div className='w-48 px-3'>
      <img alt='Movie Card' src={IMG_CDN_URL + poster}></img>
    </div>
    
  )
}

export default MovieCard