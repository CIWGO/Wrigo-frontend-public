import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Card } from "antd";
import { searchUserTopics, searchAllTopics } from "../../../utils/index";
import { useSelector } from "react-redux";

const { Search } = Input;

const StyledSearch = styled(Search)`
  margin-left: 10px;
  width: 41vw;
  &:hover{
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
	}
  @media (max-width: 500px) {
    width: 80vw;
  }
	input{
		border:none;
		border-radius: 10px;
		font-weight: 600;
		height: 32px;
	}
	button{
		background-color: white;
		border:none;
		border-radius: 6px;
		box-shadow: none;
	}
	svg{
		color:#2F71DA;
		font-size: larger;
	}
	span.ant-input-group-addon{
		border-radius: 6px;
		background-color:transparent
	}
`;

const SearchBox = () => {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [visible, setVisible] = useState(false); // modal visible state
	const { userId, token } = useSelector((state) => state.user);
	const handleSearch = async () => {
		try {
			const userResponse = await searchUserTopics({ uid: userId, token, input: searchInput });
			const allResponse = await searchAllTopics({ input: searchInput, token });
			const userResults = userResponse.data.filter((result) => result.uid);
			const allResults = allResponse.data.filter((result) => !result.uid);
			const results = [...userResults, ...allResults];
			console.log(results.writing_id);
			setSearchResults(results);
			setVisible(true); // show modal when search results are ready
		} catch (error) {
			console.error(error);
		}
	};

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleModalCancel = () => {
		setVisible(false);
	};
	const handleCardClick = (result) => {
		console.log(result);
	};
	return (
		<>
			<StyledSearch
				type="text"
				value={searchInput}
				onChange={handleInputChange}
				onSearch={handleSearch}
				placeholder="Please search the topic..."
			/>

			<Modal
				visible={visible}
				onCancel={handleModalCancel}
				width="80%"
				footer={null}
				title="Search Results"
			>
				<div>
					<h3>My Topics</h3>
					{searchResults
						.filter((result) => result.uid) // filter results for "My Topics"
						.map((result) => (
							<Card onClick={() => handleCardClick(result)} key={result.id} style={{ margin: "2px" }}>
								<p style={{ margin: "0px 0" }}>{result.task_topic}</p>
							</Card>
						))}
				</div>
				<div>
					<h3>All Topics</h3>
					{searchResults
						.filter((result) => !result.uid) // filter results for "All Topics"
						.map((result) => (
							<Card onClick={() => handleCardClick(result)}key={result.id} style={{ margin: "2px" }}>
								<p style={{ margin: "0px 0" }}>{result.topic_content}</p>
							</Card>
						))}
				</div>
			</Modal>
		</>
	);
};

export default SearchBox;
