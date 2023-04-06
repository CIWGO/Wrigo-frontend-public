import React from "react";
import moment from "moment";
import styled from "styled-components";
const TimeBox = styled.div`
  position:absolute;
  left:12px; 
  bottom:5px;
  font-weight: 600;
  font-size: 9.5px;
  color: #a2a0a0c6;
`;

const SubmitTime = ({ submitTime }) => {
	return (
		<TimeBox>{moment(submitTime).format("MMMM Do YYYY")}</TimeBox>
	);
};

export default SubmitTime;
