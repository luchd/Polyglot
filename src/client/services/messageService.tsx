export type Message = {
  id: number;
  messageBody: string;
  messageSender: string;
  messageLanguage: "ENG"
  messageSentTime: Date;
}

export type Messages = Message[];

const messages : Messages = [
  {
    id: 0,
    messageBody: "hello", 
    messageSender: "Bobby", 
    messageLanguage: "ENG", 
    messageSentTime: new Date()},
  {
    id: 1,
    messageBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus iste aliquam corporis laboriosam ut voluptatem doloremque perferendis quia nisi.", 
    messageSender: "Bobby", 
    messageLanguage: "ENG", 
    messageSentTime: new Date()},
  {
    id: 2,
    messageBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, assumenda.", 
    messageSender: "Bobby", 
    messageLanguage: "ENG", 
    messageSentTime: new Date()},
]

export const getMessages = () : Promise<Messages> => {
  return new Promise((resolve, reject)=> resolve(messages))
}

export const addMessage = (message: Message) : Promise<Messages> => {
  const newMessage : Message = {
    id: messages.length,
    messageBody: message
    messageSender: "Bobby", 
    messageLanguage: "ENG", 
    messageSentTime: new Date()}, 
  }
  messages.push(message);
}