import React from 'react'
import { Link } from 'wouter'

const GoToMovieDetails = ({ id, children }) => {
    const path = `/moviedetails/${id}`
  return (
    <Link to={path}>
        {children}
    </Link>
  )
}

export default GoToMovieDetails