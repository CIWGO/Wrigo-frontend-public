import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { AppleOutlined, WindowsOutlined } from "@ant-design/icons";
const DownloadContainer = styled.div`
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
	text-align: center;
	margin-bottom: 50px;
`;

const DownloadButtonContainer = styled.div`
	display: inline-block;
`;

const DownloadButton = styled(Button)`
	// background-color:black;
	// color:white;
	// color:#2F71D5;
	height:50px;
	width:200px;
	margin-left: 20px;
	margin-right: 20px;
`;

const Download = () => {
	return (
		<DownloadContainer id="download">
			<DownloadTitle>Download Wrigo Desktop</DownloadTitle>
			<DownloadButtonContainer>
				<a href="https://wrigopublicdownload.s3.ap-southeast-2.amazonaws.com/Wrigo.dmg" download="Wrigo for Mac">
					<DownloadButton type="primary">
						<AppleOutlined />Download for MacOS
					</DownloadButton>
				</a>
				<a href="https://wrigopublicdownload.s3.ap-southeast-2.amazonaws.com/Wrigo.msi" download="Wrigo for Windows">
					<DownloadButton type="primary">
						<WindowsOutlined />Download for Windows
					</DownloadButton>
				</a>
			</DownloadButtonContainer>
		</DownloadContainer>
	);
};

export default Download;
