import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { AppleOutlined, WindowsOutlined } from "@ant-design/icons";
const DownloadButtonsContainer = styled.div`
  display: flex;
	flex-direction:column;
  justify-content: center;
  align-content: center;
  height: 400px;
	background-color:#F7F7F7;
	padding: 50px;
	`;
const DownloadTitle = styled.h1`
	font-size: 32px;
	font-weight: 700;
	color:rgb(47, 115, 218);
	padding: 10px 0px 30px 0px;
	`;

const DownloadButton = styled(Button)`
	background-color:#fff;
	color:#2F71D5;
  margin: 20px auto;
	height:50px;
	width:200px;
`;

const Download = () => {
	return (
		<DownloadButtonsContainer id="download">
			<DownloadTitle>Download Wrigo App</DownloadTitle>
			<DownloadButton type="primary">
				<AppleOutlined />Download for MacOS</DownloadButton>
			<DownloadButton type="primary"><WindowsOutlined />Download for Windows</DownloadButton>
		</DownloadButtonsContainer>
	);
};

export default Download;
