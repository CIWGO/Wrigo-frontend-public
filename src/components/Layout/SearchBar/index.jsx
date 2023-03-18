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
import { Input, Select } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const StyledSearch = styled(Input.Search)`
  width: 400px;

  @media (max-width: 991.98px) {
    width: 200px;
  }
`;

const SearchBar = () => {
	const [searchType, setSearchType] = useState("topics");

	const handleSearch = (value) => {
		console.log(`Searching for "${value}" in ${searchType}`);
		// pending input based on search type selection
	};

	const handleSelectChange = (value) => {
		setSearchType(value);
	};

	return (
		<StyledSearch
			placeholder="Please search for topics or writings"
			allowClear
			enterButton={<SearchOutlined />}
			onSearch={handleSearch}
			addonBefore={
				<Select defaultValue="topics" style={{ width: 120 }} onChange={handleSelectChange}>
					<Option value="topics">Topic</Option>
					<Option value="writings">Writing</Option>
				</Select>
			}
		/>
	);
};

export default SearchBar;
