import React from 'react';
import styled from 'styled-components';

interface ChatItemProps {
     name: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ name }) => {
     return (
          <ChatItemContainer>
               {name}
          </ChatItemContainer>
     );
};

export default ChatItem;

const ChatItemContainer = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;