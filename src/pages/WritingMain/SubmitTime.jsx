import React from "react";
import moment from "moment";

const SubmitTime = () => {
	return (
		<div>Evaluted at {moment(Date.now()).format("MMMM Do YYYY, h:mm a")}</div>
	);
};

export default SubmitTime;
