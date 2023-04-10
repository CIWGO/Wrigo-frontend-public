import { useState } from "react";
import styled from "styled-components";
// import { Modal, Card, Select } from "antd";
import { Select } from "antd";

import { searchUserTopics, searchAllTopics } from "../../../utils/index";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const { Search } = Input;
const StyledSearch = styled(Select)`
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

	.ant-input::-webkit-input-placeholder {
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,300;500;700;900&family=Rubik:wght@400;500;600&display=swap');

	font-family: 'Poppins', sans-serif;
    font-size: 14px;
}
h1{    font-size: 20px;
	font-weight: 700;
	color: rgb(47, 113, 218);
	height: 30px;
	text-align: start;}
`;

const SearchBox = () => {
	// const navigate = useNavigate();
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	// const [visible, setVisible] = useState(false); // modal visible state
	// const [setVisible] = useState(false); // modal visible state
	// const handleSearch = (newValue) => {
	//   if (newValue) {
	//     fetch(newValue, setData);
	//   } else {
	//     setData([]);
	//   }
	// };
	const { userId, token } = useSelector((state) => state.user);
	const handleSearch = async (searchInput) => {
		try {
			const userResponse = await searchUserTopics({ uid: userId, token, input: searchInput });
			const allResponse = await searchAllTopics({ input: searchInput, token });
			const userResults = userResponse.data.filter((result) => result.uid);
			const allResults = allResponse.data.filter((result) => !result.uid);
			const results = [...userResults, ...allResults];
			// setVisible(true);
			// show modal when search results are ready
			setSearchResults(results);
			console.log(searchInput);

			console.log(searchResults);
		} catch (error) {
			console.error(error);
		}
	};

	const handleInputChange = (e) => {
		console.log(e.target.value);
		setSearchInput(e.target.value);
	};
	const myTopics = searchResults.filter((result) => result.uid).map((result) => ({
		value: result.writing_id,
		label: result.task_topic,
		key: result.writing_id
	}));

	const allTopics = (searchResults || []).filter((result) => !result.uid).map((result) => ({
		value: result.topic_id,
		label: result.topic_content,
		key: result.topic_id
	}));
	console.log(myTopics, allTopics);
	// const handleModalCancel = () => {
	// 	setVisible(false);
	// };

	// const handleNavigate = (url) => {
	// 	setVisible(false);
	// 	navigate(url);
	// 	console.log(url);
	// };

	return (
		<>
			<h1 style={{ color: "#2F71DA" }}>Search</h1>
			<StyledSearch
				showSearch
				type="text"
				value={searchInput}
				onChange={handleInputChange}
				onSearch={handleSearch}
				placeholder="Search topic"
				defaultActiveFirstOption={false}
				showArrow={false}
				filterOption={false}
				notFoundContent={"null"}
				options={[
					{
						label: "My Topics",
						options: myTopics
					},
					{
						label: "All Topics",

						options: allTopics
					}
				]}
			/>

			{/* <Modal
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
							<Card onClick={() => handleNavigate(`/user/writing/${result.writing_id}`)} key={result.id} style={{ margin: "2px" }}>
								<p style={{ margin: "0px 0" }}>{result.task_topic}</p>
							</Card>
						))}
				</div>
				<div>
					<h3>All Topics</h3>
					{searchResults
						.filter((result) => !result.uid) // filter results for "All Topics"
						.map((result) => (
							<Card onClick={() => handleNavigate(`/user/topics/content/${result.topic_id}`)} key={result.id} style={{ margin: "2px" }}>
								<p style={{ margin: "0px 0" }}>{result.topic_content}</p>
							</Card>
						))}
				</div>
			</Modal> */}
		</>
	);
};

export default SearchBox;
