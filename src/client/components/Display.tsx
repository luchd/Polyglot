import React, { useState, useEffect } from 'react';
import Input from './Input';
import MessageList from './MessageList';
import { getMessages, Messages } from '../services/messageService';

const Display = () => {
  const [messages, setMessages] = useState<Messages>([]);

  const loadMessages = () => {
    const newMessages = getMessages();
    setMessages(newMessages);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div>
      <MessageList messages={messages} />
      <Input setMessages={setMessages} />
    </div>
  );
};

export default Display;