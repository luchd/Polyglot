import React, { useState, useEffect } from 'react'

import Input from "./Input";
import MessageList from './MessageList';

import {getMessages, Messages} from '../services/messageService'

const Display = () => {
  const [messages, setMessages] = useState<Messages>([]) 

  useEffect(() => {
    const loadMessages = async () => {
      const messages = await getMessages()
      setMessages(messages);
    }
    loadMessages()
  }, [])
  return (
    <div>
      <MessageList messages={messages} />
      <Input />
    </div>
  )
}

export default Display