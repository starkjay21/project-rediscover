import React from 'react'
import phone from '../img/phone.png'
import video from '../img/video.png'
import ProfilePic from "../img/profile.jpg";
import More from '../img/more.png'
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className='chat-container'>
      <div className="chat-highlights">
          <img src={ProfilePic} className='chat-highlight-pic' alt='profile-pic'/>
          <p className='chat-highlight-profile'>Jayesh Nayak</p>
          <img src={video} alt = 'make-video-call' className="chat-highlight-vc"/>
          <img src={phone} alt = 'make-phone-call' className="chat-highlight-call"/>
          <img src={More} alt = 'more' className="chat-highlight-more"/>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat