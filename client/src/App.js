import { useEffect } from 'react';
import styled from 'styled-components';
import { io } from 'socket.io-client';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

function App() {
  const connect = () => {
    console.log('connect')
    const socket = io('http://localhost:9000');
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <AppContainer>
      <h1>Tic-tac-toe</h1>
    </AppContainer>
  );
}

export default App;
