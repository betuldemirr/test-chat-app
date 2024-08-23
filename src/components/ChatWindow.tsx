import React, { useState } from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageInput from './MessageInput';


const ChatWindow: React.FC<{ user: string | null }> = ({ user }) => {
     const [messages, setMessages] = useState<string[]>([]);

     const handleSend = (message: string) => {
          setMessages([...messages, message]);
     };

     return (
          <ChatWindowContainer>
               {user ? (
                    <>
                         <h2>Chat with {user}</h2>
                         <MessagesContainer>
                              <MessageList messages={messages} />
                         </MessagesContainer>
                         <MessageInput onSend={handleSend} />
                    </>
               ) : (
                    <div>Please select a user to chat with.</div>
               )}
          </ChatWindowContainer>
     );
};

export default ChatWindow;

const ChatWindowContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-left: 1px solid #ddd;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;