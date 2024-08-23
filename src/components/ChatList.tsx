import React from 'react';
import styled from 'styled-components';

const users = ['Alice', 'Bob', 'Charlie'];

interface ChatListProps {
     onUserClick: (user: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ onUserClick }) => {
     return (
          <ChatListContainer>
               {users.map((user, index) => (
                    <ChatItemContainer key={index} onClick={() => onUserClick(user)}>
                         Kullanıcı: {user}
                    </ChatItemContainer>
               ))}
          </ChatListContainer>
     );
};

export default ChatList;

const ChatListContainer = styled.div`
  width: 25%;
  background-color: #f5f5f5;
  padding: 1rem;
  border-right: 1px solid #ddd;
  overflow-y: auto;
`;

const ChatItemContainer = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;