import { useDispatch, useSelector } from "react-redux";
import { increaseNumber, increaseByMount, requestNumberAsync } from "../../slice/numberSlice";

const ReduxExample = () => {
	const status = useSelector((state) => { return state.numberStore.status; });

	const dispatch = useDispatch();

	const increaseButton = () => {
		dispatch(increaseNumber());
	};

	const increaseByMountButton = () => {
		dispatch(increaseByMount(5));
	};

	const SendRequestButton = () => {
		dispatch(requestNumberAsync());
		console.log("status", status);
	};
	return (
		<div>
			<p>{status}</p>
			<button onClick={increaseButton}>increase</button>

			<button>decrease</button>
			<button onClick={increaseByMountButton}>increaseByMount</button>
			<button onClick={SendRequestButton}>Send Request</button>
		</div>
	);
};
export default ReduxExample;
