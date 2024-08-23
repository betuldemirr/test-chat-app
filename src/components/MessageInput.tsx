import React, { useState, KeyboardEvent } from 'react';
import styled from 'styled-components';

interface MessageInputProps {
     onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
     const [message, setMessage] = useState('');

     const handleSend = () => {
          if (message.trim()) {
               onSend(message);
               setMessage('');
          }
     };

     const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
               e.preventDefault();
               handleSend();
          }
     };

     return (
          <InputContainer>
               <TextInput
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Write a message..."
               />
               <SendButton onClick={handleSend}>Send</SendButton>
          </InputContainer>
     );
};

export default MessageInput;

const InputContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
`;

const TextInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SendButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;