import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	increaseNumber,
	increaseByMount,
	requestNumberAsync
} from "../../features/numberSlice";

const ReduxExample = () => {
	const [inputNumber, setInputNumber] = useState(0);
	const { status, value } = useSelector((state) => {
		return state.numberStore;
	});

	const dispatch = useDispatch();

	const increaseButton = () => {
		dispatch(increaseNumber());
	};

	const increaseByMountButton = () => {
		dispatch(increaseByMount(inputNumber));
	};

	const SendRequestButton = () => {
		dispatch(requestNumberAsync());
		// console.log("status", status);
	};
	return (
		<div>
			<p>Please install Redux dev tools in your Chrome</p>
			<p>status: {status}</p>
			<p>value: {value}</p>
			<div>
				<button onClick={increaseButton}>increase</button>
			</div>

			<div>
				{!(Number(inputNumber)) && <p>Please input a number</p>}
				<input placeholder="input your number" value={inputNumber} onChange={e => {
					setInputNumber(e.target.value);
				}} />
				<button onClick={increaseByMountButton}>increaseByMount</button>
			</div>

			<div>
				<button onClick={SendRequestButton}>Send Request</button>
			</div>
		</div>
	);
};
export default ReduxExample;
