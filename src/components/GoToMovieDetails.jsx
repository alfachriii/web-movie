import React from 'react'
import { Link } from 'wouter'
import { navigate } from 'wouter/use-browser-location'

const GoToMovieDetails = ({ id, children }) => {
    const path = `/moviedetails/${id}`

    const reload = () => {
      setTimeout(() => {

        location.reload()
      }, 100)
    }
  return (
    <Link to={path}>
    <div onClick={reload}>
        {children}
    </div>
    </Link>
  )
}

export default GoToMovieDetails