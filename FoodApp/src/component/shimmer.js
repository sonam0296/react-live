import React from 'react'

const Shimmer = () => {
  return (
    <div>
        <div className='restuarant-list'>
            {
                Array(10).fill("").map((e, index)=>(
                    <div className='shimmer-card' key={index}></div>
                ))
            }
        </div>
    </div>
  )
}

export default Shimmer