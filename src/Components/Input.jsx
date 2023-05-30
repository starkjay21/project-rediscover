import React from 'react'
import Attach from '../img/attach.png'
import Image from '../img/image.png'

const Input = () => {
  return (
    <div className='input-container'>
      <input type='text' placeholder='Type something...' className='message-input'/>
      <div className='send'>
          <input type='file' id='file' style={{display:"none"}}/>
          <label htmlFor='file'>
              <img src={Attach} alt='attach file' className='send-icons'/>
          </label>
          <input type="file" id='image' accept="image/*" style={{display:"none"}} />
          <label htmlFor='image'>
              <img src={Image} alt='attach' className='send-icons'/>
          </label>
          <button>SEND</button>
      </div>
    </div>
  )
}
export default Input