import DividerLine from "./components/Divider";
import SampleTopic from "./components/SampleTopic";
import SampleWriting from "./components/SampleWriting";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  background: white;
  border-radius: 20px;
  margin-left: 30px;
  margin-top: 76px;
  margin-bottom: 25px;
  width: 800px;
`;

const LeftContainer = (props) => {
	return (
		<StyledCard>
			<SampleTopic topicId={props.topicId}/>
			<DividerLine />
			<SampleWriting topicId={props.topicId}/>
		</StyledCard>
	);
};

export default LeftContainer;
