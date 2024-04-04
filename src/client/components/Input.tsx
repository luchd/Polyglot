import React, { useState, FormEvent} from 'react'

import { addMessage, Message } from '../services/messageService';

interface InputProps {
  setMessages: (prev: any) => void;
}

const Input : React.FC<InputProps> = ({setMessages}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement> ) : Promise<void> => {
    event.preventDefault();
    const newMessage : Message = {
      messageBody: inputValue,
      messageLanguage: "ENG",
      messageSender: "Bobby",
      messageSentTime: new Date(),
    }
    await addMessage(newMessage);
    setMessages((prev : any)=>[...prev, newMessage])
    setInputValue('');
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Input: </span>
        <input 
          type="text" 
          onChange={(e)=>setInputValue(e.target.value)} 
          value={inputValue}
          name="messageBody" 
          id="messageBody" 
          className='border-black border' 
        />
        <button type="submit" className='border border-black'>Submit</button>
      </form>
    </div>
  )
}

export default Input