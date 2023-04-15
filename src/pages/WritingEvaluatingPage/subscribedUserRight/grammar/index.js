import { Title } from "../component/title";
import CheckedGrammar from "./checkedGrammar";
import { GrammarContainer } from "../style";
import { useState, useEffect } from "react";
import { grammarFix } from "../../../../utils";
import { notification } from "antd";
import { LoadingSection } from "../component/loading";

const GrammarSection = ({ text }) => {
	const [data, setData] = useState("");
	const [loading, setLoading] = useState(false);
	const token = localStorage.getItem("token");
	const uid = localStorage.getItem("uid");

	useEffect(() => {
		setLoading(true);
		grammarFix({ token, uid, text }).then((response) => {
			if (response.status === 200) {
				setData(response.data.content);
			} else if (response.status === 500) {
				notification.error({ message: "Please retry. " });
			}
		}).finally(() => setLoading(false));
	}, []);

	if (loading === true) {
		return (
			<LoadingSection text="Checking your grammar..." />
		);
	} else {
		return (
			<GrammarContainer>
				<Title title="Grammar" />
				<CheckedGrammar text={text} checkedText={ data} />
			</GrammarContainer>
		);
	}
};

export default GrammarSection;
