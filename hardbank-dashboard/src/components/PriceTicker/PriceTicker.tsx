import React from 'react';
import './PriceTicker.css';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export default function PriceTicker() {
  const socketUrl = 'wss://stream.binance.com:9443/stream';
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
		socketUrl,
	);
  const messageHistory = React.useRef<MessageEvent[]>([]);
  messageHistory.current = React.useMemo(
		() => messageHistory.current.concat(lastJsonMessage ?? []),
		[lastJsonMessage],
	);
  console.log(messageHistory)

  const handleClickSendMessage = React.useCallback(
		() =>
			sendJsonMessage({
				method: 'SUBSCRIBE',
				params: ['slpusdt@ticker'],
				id: 1,
			}),
		[sendJsonMessage],
	);
  const connectionStatus = {
		[ReadyState.CONNECTING]: 'Connecting',
		[ReadyState.OPEN]: 'Open',
		[ReadyState.CLOSING]: 'Closing',
		[ReadyState.CLOSED]: 'Closed',
		[ReadyState.UNINSTANTIATED]: 'Uninstantiated',
	}[readyState];
  return (
    <div className="PriceTicker">
      PriceTicker Component
      <button
				onClick={handleClickSendMessage}
			>Stream</button>
      {lastJsonMessage && lastJsonMessage.data? (
				<span>
					SLP Price:{' '}
					{JSON.stringify(lastJsonMessage.data.x, null, 4)}
				</span>
			) : null}
    </div>
  )
};


