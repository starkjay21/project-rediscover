import Message from "./Message";

const Messages = () => {
  return(
      <div className='messages-container'>
          <Message owner={true}/>
          <Message/>
          <Message owner/>
          <Message/>
          <Message owner/>
          <Message/>
          <Message/>
          <Message/>
      </div>
  )
}

export default Messages;