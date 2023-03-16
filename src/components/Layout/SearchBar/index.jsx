import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const StyledSearch = styled(Search)`
  width: 400px;
  
  @media (max-width: 991.98px) {
    width: 200px;
  }
`;

const SearchBar = () => (
	<StyledSearch
		placeholder="input search text"
		allowClear
		onSearch={onSearch}
	/>
);

export default SearchBar;
