/* eslint-disable camelcase */
import { GrammarContainer } from "../style";
import { Title } from "../component/title";
import { useState, useEffect } from "react";
import { premSampleWriting } from "../../../../utils";
import styled from "styled-components";
import { RedoOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { LoadingSection } from "../component/loading";

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
			notification.error({ message: "Please retry. " });
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
			<LoadingSection text = "Generating writing sample..."/>
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
