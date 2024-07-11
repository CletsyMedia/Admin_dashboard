import React from 'react'

const Pagination = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className="">
        <button className='cursor-not-allowed bg-[#b3b3b3]  text-center w-20 rounded-md py-2 m-2'>Prev</button>
      </div>
      <div className="">
        <button className='text-center w-20 rounded-md py-2 m-2 bg-[#5d57c9] text-white hover:bg-[#5d57c9] hover:opacity-90'>Next</button>
      </div>
    </div>
  )
}

export default Pagination