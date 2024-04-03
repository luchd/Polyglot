import React from 'react'

import {Message} from '../services/messageService'

export interface MessageProps {
  message: Message
}


const MessageItem : React.FC<MessageProps> = ({message}) => {
  const {messageBody, messageLanguage, messageSender, messageSentTime} = message
  return (
    <div className='text-sm'>
      <div className='border-b border-black p-3'>
        <span>{messageSender}</span> : <span>{messageSentTime.toString()}</span> : <span> {messageLanguage}</span>
        <div> {messageBody} </div>
      </div>
    </div>
  )
}

export default MessageItem