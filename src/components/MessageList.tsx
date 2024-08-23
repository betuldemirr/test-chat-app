import React from 'react';
import styled from 'styled-components';

interface MessageListProps {
     messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
     return (
          <MessageListContainer>
               {messages.map((msg, index) => (
                    <MessageItem key={index}>{msg}</MessageItem>
               ))}
          </MessageListContainer>
     );
};

export default MessageList;

const MessageListContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     gap: 0.5rem;
     overflow-y: auto;
     padding: 0.5rem;
`;

const MessageItem = styled.div`
     padding: 0.5rem 1.0rem;
     border-radius: 4px;
     background-color: #f1f1f1;
     max-width: 60%;
`;