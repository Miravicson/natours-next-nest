import React, { useCallback, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const WEBSOCKET_URL = 'ws://localhost:4100/chat';

const ConnectionMap = {
  [ReadyState.CONNECTING]: 'Connecting',
  [ReadyState.OPEN]: 'Open',
  [ReadyState.CLOSING]: 'Closing',
  [ReadyState.CLOSED]: 'Closed',
  [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
};

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const { readyState, sendJsonMessage, lastJsonMessage } = useWebSocket<{ data: string }>(WEBSOCKET_URL, {
    shouldReconnect: () => true,
    share: true,
    filter(message) {
      const parsedMessage = JSON.parse(message.data);
      return parsedMessage.event === 'chat-message';
    },
  });

  const handleClickSendMessage = useCallback(() => {
    sendJsonMessage({ event: 'chat-message', data: message });
    setMessage('');
  }, [message]);
  const connectionStatus = ConnectionMap[readyState];

  return (
    <div className="flex flex-col items-center py-20">
      <h1>Chat</h1>
      <span>The WebSocket is currently {connectionStatus}</span>

      <h2 className="my-4 w-[max-content] border-b border-tertiary-dark px-5">{lastJsonMessage?.data ?? ''}</h2>

      <form>
        <input
          type="text"
          placeholder="Enter message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="my-4 rounded-lg border border-primary-dark px-5 py-2 text-base text-primary-dark outline-1 outline-primary-light placeholder:text-primary-light"
        />
      </form>

      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
        className="block bg-primary-dark px-5 py-3 text-white"
      >
        Send Message
      </button>
    </div>
  );
};

export default ChatPage;
