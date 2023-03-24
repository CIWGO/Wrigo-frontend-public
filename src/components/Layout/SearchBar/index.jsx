/* eslint-disable camelcase */
import { useState } from "react";
import { Input, Modal } from "antd";
import styled from "styled-components";
import { searchUserTopics, searchAllTopics } from "../../../utils/index";

const { Search } = Input;

const StyledSearch = styled(Search)`
  width: 400px;
  
  @media (max-width: 991.98px) {
    width: 200px;
  }
`;

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");
	const [myTopics, setMyTopics] = useState([]);
	const [allTopics, setAllTopics] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const onSearch = async (value) => {
		setSearchValue(value);
		const myTopicsResults = await searchUserTopics({ uid: "333", input: value });
		const allTopicsResults = await searchAllTopics(value);
		setMyTopics(myTopicsResults.map(({ topic_content }) => topic_content));
		setAllTopics(allTopicsResults.map(({ topic_content }) => topic_content));
		setModalVisible(true);
	};

	return (
		<>
			<StyledSearch
				placeholder="Input search text"
				allowClear
				onSearch={onSearch}
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<Modal
				title="Search Results"
				visible={modalVisible}
				onCancel={() => setModalVisible(false)}
				width="80%"
			>
				<h3>My Topics</h3>
				{myTopics.map((content) => (
					<p key={content}>{content}</p>
				))}
				<h3>All Topics</h3>
				{allTopics.map((content) => (
					<p key={content}>{content}</p>
				))}
			</Modal>
		</>
	);
};

export default SearchBar;
