/* eslint-disable camelcase */
import { GrammarContainer } from "../style";
import { Title } from "../component/title";
import { useState, useEffect } from "react";
import { premSampleWriting } from "../../../../utils";
import styled, { keyframes } from "styled-components";
import { RedoOutlined } from "@ant-design/icons";

const Loading = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
	display: flex;
	background-color: transparent;
	flex-direction: column;
	align-items: center;
	.loader {
		border: 5px solid #f3f3f3;
		border-top: 5px solid rgb(47, 113, 218);
		border-radius: 50%;
		width: 60px;
		height: 60px;
		animation: ${spin} 1s linear infinite;
		margin: 20px;
	}
`;

const LoadingText = styled.div`
	font-size: 20px;
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700;900&family=Rubik:wght@400;500;600&display=swap");
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	text-align: center;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	width: 100%;
`;

const RedoIcon = styled(RedoOutlined)`
	font-size: 20px;
	color: #2f71da;
	margin-top: 12px;
`;

const WritingSampleSection = (props) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [hasRunOnce, setHasRunOnce] = useState(false);
	const topic_content = props.text;

	const fetchWritingSample = async () => {
		setLoading(true);
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		const response = await premSampleWriting({ token, uid, topic_content });
		if (response.status === 200) {
			setData(response.data.content);
			localStorage.setItem("userWritingSampleData", response.data.content);
		} else if (response.status === 500) {
			alert("Something is wrong with network, please retry.");
		}
		setLoading(false);
		setHasRunOnce(true);
	};

	useEffect(() => {
		const storedData = localStorage.getItem("userWritingSampleData");
		if (storedData) {
			setData(storedData);
			setHasRunOnce(true);
		} else {
			fetchWritingSample();
		}
	}, []);

	const handleRegenerate = () => {
		fetchWritingSample();
	};

	if (loading === true) {
		return (
			<GrammarContainer>
				<Loading>
					<LoadingContainer>
						<div className="loader"></div>
						<LoadingText>Generating writing sample...</LoadingText>
					</LoadingContainer>
				</Loading>
			</GrammarContainer>
		);
	}

	return (
		<GrammarContainer>
			<TitleContainer>
				<Title title="Writing Sample" />
				{hasRunOnce && <RedoIcon onClick={handleRegenerate} />}
			</TitleContainer>
			<p>{data}</p>
		</GrammarContainer>
	);
};

export default WritingSampleSection;
