import DividerLine from "./components/Divider";
import SampleTopic from "./components/SampleTopic";
import SampleWriting from "./components/SampleWriting";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  background: white;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 60px;
  margin-bottom: 25px;
  width: 800px;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 580px) {
	padding-left: 0;
	padding-right: 0;
  }
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
