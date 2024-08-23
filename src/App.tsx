import React, { useState } from 'react';
import styled from 'styled-components';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import ChatItem from './components/ChatItem';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleUserClick = (user: string) => {
    setSelectedUser(user);
  };

  return (
    <AppContainer>
      <ChatList onUserClick={handleUserClick} />
      <ChatWindow user={selectedUser} />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;
