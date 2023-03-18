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

import { Input, Select } from "antd";
import styled from "styled-components";
import { useState } from "react";

const { Search } = Input;
const { Option } = Select;

const StyledSearch = styled(Search)`
  width: 400px;
  
  @media (max-width: 991.98px) {
    width: 200px;
  }
`;

const SearchBar = () => {
	const [searchType, setSearchType] = useState("topics");

	const handleSearch = (value) => {
		console.log(`Searching for "${value}" in ${searchType}`);
		// 根据选择的搜索类型，构造相应的搜索查询
	};

	const handleSelectChange = (value) => {
		setSearchType(value);
	};

	return (
		<div>
			<StyledSearch
				placeholder="input search text"
				allowClear
				onSearch={handleSearch}
			/>
			<Select defaultValue="topics" style={{ width: 120, marginLeft: "1em" }} onChange={handleSelectChange}>
				<Option value="topics">Search Topics</Option>
				<Option value="writings">Search Writings</Option>
			</Select>
		</div>
	);
};

export default SearchBar;
