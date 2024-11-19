import React from 'react'

const SelectedMovieLoading = () => {
  return (
    <>
        <div className='w-full h-64 '>
            <div className='w-fit h-fit px-2 bg-gray-700 text-gray-700 rounded-sm animate-pulse lg:text-3xl text-xl'>Explore</div>
            <div className='md:w-56 w-44 h-4 mt-3 bg-gray-700 rounded-sm animate-pulse'></div>
            <div className='w-full h-48 mt-3 bg-gray-700 animate-pulse'></div>
        </div>
    </>
  )
}

export default SelectedMovieLoading