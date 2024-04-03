import React, {useEffect, useState} from 'react'

import MessageItem from './MessageItem'

import {Messages} from '../services/messageService'

interface MessageListProps {
  messages: Messages
}

const MessageList : React.FC<MessageListProps> = ({messages}) => {
  return (
    <div>
      {messages.map((message, index)=><MessageItem key={index} message={message}/>)}
    </div>
  )
}

export default MessageList