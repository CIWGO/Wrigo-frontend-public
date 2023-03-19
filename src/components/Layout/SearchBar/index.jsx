// import { Input } from "antd";
// import styled from "styled-components";

// const { Search } = Input;
// const onSearch = (value) => console.log(value);
// const StyledSearch = styled(Search)`
//   width: 400px;

//   @media (max-width: 991.98px) {
//     width: 200px;
//   }
// `;

// const SearchBar = () => (
// 	<StyledSearch
// 		placeholder="input search text"
// 		allowClear
// 		onSearch={onSearch}
// 	/>
// );

// export default SearchBar;

// 2
// import { Input, Select } from "antd";
// import styled from "styled-components";
// import { useState } from "react";

// const { Option } = Select;

// const StyledSearch = styled(Input.Search)`
//   width: 400px;

//   @media (max-width: 991.98px) {
//     width: 200px;
//   }
// `;

// const SearchBar = () => {
// 	const [searchType, setSearchType] = useState("topics");

// 	const handleSearch = (value) => {
// 		console.log(`Searching for "${value}" in ${searchType}`);
// 		// 根据选择的搜索类型，构造相应的搜索查询
// 	};

// 	const handleSelectChange = (value) => {
// 		setSearchType(value);
// 	};

// 	return (
// 		<StyledSearch
// 			placeholder="input search text"
// 			allowClear
// 			enterButton
// 			onSearch={handleSearch}
// 			addonAfter={
// 				<Select defaultValue="topics" style={{ width: 120 }} onChange={handleSelectChange}>
// 					<Option value="topics">Search Topics</Option>
// 					<Option value="writings">Search Writings</Option>
// 				</Select>
// 			}
// 		/>
// 	);
// };

// export default SearchBar;

// 3
// import { Input, Select } from "antd";
// import styled from "styled-components";
// import { useState } from "react";

// const { Option } = Select;

// const StyledSearch = styled(Input.Search)`
//   width: 400px;

//   @media (max-width: 991.98px) {
//     width: 200px;
//   }
// `;

// const SearchBar = () => {
// 	const [searchType, setSearchType] = useState("topics");

// 	const handleSearch = (value) => {
// 		console.log(`Searching for "${value}" in ${searchType}`);
// 		// 构造相应的搜索查询
// 		if (searchType === "topics") {
// 			// 在 topic 数据库中搜索
// 			console.log("Searching in topics database");
// 		} else if (searchType === "writings") {
// 			// 在 writing 内容中搜索
// 			console.log("Searching in writings content");
// 		}
// 	};

// 	const handleSelectChange = (value) => {
// 		setSearchType(value);
// 	};

// 	return (
// 		<StyledSearch
// 			placeholder="Please search for topics or writings"
// 			allowClear
// 			onSearch={handleSearch}
// 			addonBefore={
// 				<Select defaultValue="topics" style={{ width: 120 }} onChange={handleSelectChange}>
// 					<Option value="topics">Topic</Option>
// 					<Option value="writings">Writing</Option>
// 				</Select>
// 			}
// 		/>
// 	);
// };

// export default SearchBar;

// 4
// import { Input, Switch, Tooltip } from "antd";
// import styled from "styled-components";
// import { useState } from "react";

// const StyledSearch = styled(Input.Search)`
//   width: 400px;

//   @media (max-width: 991.98px) {
//     width: 200px;
//   }
// `;

// const SearchBar = () => {
// 	const [searchType, setSearchType] = useState("topics");

// 	const handleSwitchChange = (checked) => {
// 		setSearchType(checked ? "writings" : "topics");
// 	};

// 	const handleSearch = (value) => {
// 		console.log(`Searching for "${value}" in ${searchType}`);
// 		if (searchType === "topics") {
// 			// Search in topics database
// 			console.log("Searching in Topics");
// 		} else if (searchType === "writings") {
// 			// Search in writings database
// 			console.log("Searching in Writings");
// 		}
// 	};

// 	return (
// 		<StyledSearch
// 			placeholder={`Please search for ${searchType === "topics" ? "Topics" : "Writings"
// 			}`}
// 			allowClear
// 			onSearch={handleSearch}
// 			addonBefore={
// 				<Tooltip title="Switch Search Type" color="cyan">
// 					<Switch
// 						checkedChildren="Writings"
// 						unCheckedChildren="Topics"
// 						defaultChecked={searchType === "writings"}
// 						onChange={handleSwitchChange}
// 					/>
// 				</Tooltip>
// 			}
// 		/>
// 	);
// };

// export default SearchBar;

// 5
import { Input, Switch, Tooltip, Card, Modal } from "antd";
import styled from "styled-components";
import { useState } from "react";

const StyledSearch = styled(Input.Search)`
  width: 400px;

  @media (max-width: 991.98px) {
    width: 200px;
  }
`;

const TruncatedText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SearchResult = ({ result }) => {
	return (
		<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gridGap: "16px" }}>
			{result.map((item) => (
				<Card key={item.title} hoverable>
					<TruncatedText>{item.content}</TruncatedText>
				</Card>
			))}
		</div>
	);
};

const SearchBar = () => {
	const [searchType, setSearchType] = useState("topics");
	const [searchResult, setSearchResult] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);

	const handleSwitchChange = (checked) => {
		setSearchType(checked ? "writings" : "topics");
	};

	const handleSearch = (value) => {
		console.log(`Searching for "${value}" in ${searchType}`);
		let result = [];
		if (searchType === "topics") {
			// Search in topics database
			console.log("Searching in topics database");
			result = [{ title: "Topic 1", content: "Topic content 1" }, { title: "Topic 2", content: "Topic content 2" }, { title: "Topic 3", content: "Topic content 3" }]; // 假设搜索结果是一个包含多个对象的数组
		} else if (searchType === "writings") {
			// Search in writings database
			console.log("Searching in writings content");
			result = [{ title: "Writing 1", content: "Writing content 1" }, { title: "Writing 2", content: "Writing content 2" }, { title: "Writing 3", content: "Writing content 3" }]; // 假设搜索结果是一个包含多个对象的数组
		}
		setSearchResult(result);
		setModalVisible(true); // show Modal
	};

	const handleModalCancel = () => {
		setModalVisible(false); // hide Modal
	};

	return (
		<>
			<StyledSearch
				placeholder={`Please search for ${searchType === "topics" ? "topics" : "writings"
				}`}
				allowClear
				onSearch={handleSearch}
				addonBefore={
					<Tooltip title="Switch Search Type" color="cyan">
						<Switch
							checkedChildren="Writings"
							unCheckedChildren="Topics"
							defaultChecked={searchType === "writings"}
							onChange={handleSwitchChange}
						/>
					</Tooltip>
				}
			/>
			<Modal
				title="Search Result"
				visible={modalVisible}
				onCancel={handleModalCancel}
				footer={null}
			>
				<SearchResult result={searchResult} />
			</Modal>
		</>
	);
};

export default SearchBar;
