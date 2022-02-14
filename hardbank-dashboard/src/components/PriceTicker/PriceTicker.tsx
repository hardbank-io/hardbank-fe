import React from 'react';
import './PriceTicker.css';
import useWebSocket, { ReadyState } from 'react-use-websocket';

type props = {
	title?: String,
	showButton?: Boolean
	showSecondPrice? : Boolean
}
export default function PriceTicker(props: props) {
	// const socketUrl = 'wss://stream.binance.com:9443/stream';
	// const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
	// 		socketUrl,
	// 	);
	// const messageHistory = React.useRef<MessageEvent[]>([]);
	// messageHistory.current = React.useMemo(
	// 	() => messageHistory.current.concat(lastJsonMessage ?? []),
	// 	[lastJsonMessage],
	// );
  	const [price, setPrice] = React.useState('0.0')
	const [price2, setPrice2] = React.useState('0.0')
	
	React.useEffect( () => {
		var socket = new WebSocket('wss://stream.binance.com:9443/ws/slpusdt@kline_30m');
		socket.onmessage = async function (event) { 
			const data = JSON.parse(event.data);
			const price = parseFloat(data.k.o).toFixed(4)
			setPrice(price)
		}
	}, [])

	const handleClickConvertPrice = () => {
		fetch(`http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FIXER_API_KEY}&symbols=USD,PHP`)
		.then(response => response.json())
		.then(data => {
			let conversion = data.rates.PHP / data.rates.USD
			let secondPrice = (parseFloat(price) * conversion).toFixed(4)
			setPrice2(secondPrice)
		})
	}
	// const handleClickSendMessage = React.useCallback(
	// 	() =>
	// 		sendJsonMessage({
	// 			method: 'SUBSCRIBE',
	// 			params: ['btcusdt@ticker'],
	// 			id: 1,
	// 		}),
	// 	[sendJsonMessage],
	// );
	// const connectionStatus = {
	// 		[ReadyState.CONNECTING]: 'Connecting',
	// 		[ReadyState.OPEN]: 'Open',
	// 		[ReadyState.CLOSING]: 'Closing',
	// 		[ReadyState.CLOSED]: 'Closed',
	// 		[ReadyState.UNINSTANTIATED]: 'Uninstantiated',
	// 	}[readyState];
  return (
    <div className="PriceTicker">
		<h2 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
			{props.title}
		</h2>
		{price && price2 && (<span className="text-xl text-blue font-semibold">${props.showSecondPrice? price2 : price}</span>)}
		
		{props.showButton && <div>
			<button className="px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white" onClick={handleClickConvertPrice}>
				Convert Price
			</button>
		</div> }
    </div>
  )
};


