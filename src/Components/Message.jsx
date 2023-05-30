import React from 'react'
import ProfilePic from "../img/profile.jpg";

const Message = ({owner}) => {

    return (
        <div id="msg-container" className='message-container owner'>
            <div className='message-info'>
                <img src={ProfilePic}
                     className='message-img'
                     alt='person-img'/>
            </div>
            <div className='message-content'>
                <p>
                    How about tomorrow? 6:30 PM?
                </p>
                <span>just now</span>
            </div>
        </div>
    )
}

export default Message