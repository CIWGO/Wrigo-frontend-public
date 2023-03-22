import React, { useState, useEffect } from "react";
import { Input, Modal } from "antd";
import styled from "styled-components";

const { Search } = Input;

const StyledSearch = styled(Search)`
  width: 400px;

  @media (max-width: 991.98px) {
    width: 200px;
  }
`;

const MyTopic = ({ myTopics, myWritings }) => (
	<>
		<h2>My Topic</h2>
		{myTopics.map((topic, index) => (
			<div key={index}>
				<h3>{topic.title}</h3>
				{myWritings
					.filter((writing) => writing.topicId === topic.id)
					.map((writing) => (
						<p key={writing.id}>{writing.content}</p>
					))}
			</div>
		))}
	</>
);

const AllTopic = ({ sampleWritings }) => (
	<>
		<h2>All Topic</h2>
		{sampleWritings.map((writing) => (
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
	const [myWritings, setMyWritings] = useState([]);
	const [sampleWritings, setSampleWritings] = useState([]);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const fetchMyTopicsAndWritings = async () => {
		// 获取My Writing的topics和writings数据
		// 你需要根据你的API实现来调整这部分代码
		const topicsResponse = await fetch("/api/mytopics");
		const topicsData = await topicsResponse.json();
		setMyTopics(topicsData);

		const writingsResponse = await fetch("/api/mywritings");
		const writingsData = await writingsResponse.json();
		setMyWritings(writingsData);
	};

	const fetchSampleWritings = async () => {
		// 获取Sample Writing的数据
		// 你需要根据你的API实现来调整这部分代码
		const sampleWritingsResponse = await fetch("/api/samplewritings");
		const sampleWritingsData = await sampleWritingsResponse.json();
		setSampleWritings(sampleWritingsData);
	};

	useEffect(() => {
		fetchMyTopicsAndWritings();
		fetchSampleWritings();
	}, []);

	const onSearch = (value) => {
		console.log(value);
		showModal();
	};

	return (
		<>
			<StyledSearch
				placeholder="input search text"
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
					<MyTopic myTopics={myTopics} myWritings={myWritings} />
					<AllTopic sampleWritings={sampleWritings} />
				</div>
			</Modal>
		</>
	);
};

export default SearchBar;
