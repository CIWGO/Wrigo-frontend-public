// import React, { useState, useEffect } from "react";
// import { Input, Modal } from "antd";
// import styled from "styled-components";
// import { searchUserTopics, searchAllTopics } from "../../../utils/index";

// const { Search } = Input;

// const StyledSearch = styled(Search)`
//   width: 400px;

//   @media (max-width: 991.98px) {
//     width: 200px;
//   }
// `;

// const MyTopic = ({ myTopics }) => (
// 	<>
// 		<h2>My Topic</h2>
// 		{myTopics.map((topic, index) => (
// 			<div key={index}>
// 				<h3>{topic.title}</h3>
// 			</div>
// 		))}
// 	</>
// );

// const AllTopic = ({ allTopic }) => (
// 	<>
// 		<h2>All Topic</h2>
// 		{allTopic.map((writing) => (
// 			<div key={writing.id}>
// 				<h3>{writing.title}</h3>
// 				<p>{writing.content}</p>
// 			</div>
// 		))}
// 	</>
// );

// const SearchBar = () => {
// 	const [isModalVisible, setIsModalVisible] = useState(false);
// 	const [myTopics, setMyTopics] = useState([]);
// 	const [allTopics, setAllTopics] = useState([]);

// 	const showModal = () => {
// 		setIsModalVisible(true);
// 	};

// 	const handleCancel = () => {
// 		setIsModalVisible(false);
// 	};

// 	const fetchMyTopics = async () => {
// 		const topicsResponse = await fetch(searchUserTopics);
// 		const topicsData = await topicsResponse.json();
// 		setMyTopics(topicsData);
// 	};

// 	const fetchAllTopics = async () => {
// 		const allTopicsResponse = await fetch(searchAllTopics);
// 		const allTopicsData = await allTopicsResponse.json();
// 		setAllTopics(allTopicsData);
// 	};

// 	useEffect(() => {
// 		fetchMyTopics();
// 		fetchAllTopics();
// 	}, []);

// 	const onSearch = (value) => {
// 		console.log(value);
// 		showModal();
// 	};

// 	return (
// 		<>
// 			<StyledSearch
// 				placeholder="Please search topic here"
// 				allowClear
// 				onSearch={onSearch}
// 			/>
// 			<Modal
// 				title="Search Results"
// 				visible={isModalVisible}
// 				footer={null}
// 				onCancel={handleCancel}
// 				width="80%"
// 			>
// 				<div style={{ display: "flex", flexDirection: "column" }}>
// 					<MyTopic myTopics={myTopics} />
// 					<AllTopic allTopics={allTopics} />
// 				</div>
// 			</Modal>
// 		</>
// 	);
// };

// export default SearchBar;

import React, { useState } from "react";
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

const MyTopic = ({ myTopics }) => (
	<>
		<h2>My Topic</h2>
		{myTopics.map((topic, index) => (
			<div key={index}>
				<h3>{topic.title}</h3>
			</div>
		))}
	</>
);

const AllTopic = ({ allTopic }) => (
	<>
		<h2>All Topic</h2>
		{allTopic.map((writing) => (
			<div key={writing.id}>
				<h3>{writing.title}</h3>
				<p>{writing.content}</p>
			</div>
		))}
	</>
);

const SearchBar = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [myTopics, setMyTopics] = useState([]);
	const [allTopics, setAllTopics] = useState([]);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const fetchMyTopics = async (value) => {
		console.log("Fetching my topics with value: ", value);
		const topicsResponse = await searchUserTopics({ input: value });
		const topicsData = topicsResponse.data;
		console.log("My topics data: ", topicsData);
		setMyTopics(topicsData);
	};

	const fetchAllTopics = async (value) => {
		console.log("Fetching all topics with value: ", value);
		const allTopicsResponse = await searchAllTopics({ input: value });
		const allTopicsData = allTopicsResponse.data;
		console.log("All topics data: ", allTopicsData);
		setAllTopics(allTopicsData);
	};

	const onSearch = (value) => {
		console.log(value);
		fetchMyTopics(value);
		fetchAllTopics(value);
		showModal();
	};

	return (
		<>
			<StyledSearch
				placeholder="Please search topic here"
				allowClear
				onSearch={onSearch}
			/>
			<Modal
				title="Search Results"
				visible={isModalVisible}
				footer={null}
				onCancel={handleCancel}
				width="80%"
			>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<MyTopic myTopics={myTopics} />
					<AllTopic allTopics={allTopics} />
				</div>
			</Modal>
		</>
	);
};

export default SearchBar;
