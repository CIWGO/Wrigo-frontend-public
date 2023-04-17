import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { AppleOutlined, WindowsOutlined } from "@ant-design/icons";
const DownloadButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
	background-color:#F7F7F7;
`;

const DownloadButton = styled(Button)`
	background-color:#fff;
	color:#2F71D5;
  margin: 0 50px;
`;

const Download = () => {
	return (
		<DownloadButtonsContainer id ="download">
			<DownloadButton type="primary">
				<AppleOutlined />Download for MacOS</DownloadButton>
			<DownloadButton type="primary"><WindowsOutlined />Download for Windows</DownloadButton>
		</DownloadButtonsContainer>
	);
};

export default Download;
