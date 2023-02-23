import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <div className='flex justify-center text-center items-center bg-blue-400 p-3'>
      <a className='flex  text-black' href='https://github.com/chaosai16'target="_blank">@chaosai16</a>
      <AiFillGithub size={20} className='mx-2'/>
    </div>
  )
}

export default Footer
