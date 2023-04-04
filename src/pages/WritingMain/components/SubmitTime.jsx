import React from "react";
import moment from "moment";
import styled from "styled-components";
const TimeBox = styled.div`
  position:absolute;
  left:10px; 
  bottom:5px;
  font-size: 2px;
  color: #a8a6a6c8;
`;

const SubmitTime = ({ submitTime }) => {
	return (
		<TimeBox>{moment(submitTime).format("MMMM Do YYYY")}</TimeBox>
	);
};

export default SubmitTime;
