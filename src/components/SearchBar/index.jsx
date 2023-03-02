import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.scss";

function SearchBar ({ handleSearch }) {
	const [searchValue, setSearchValue] = useState("");

	const handleSubmit = () => {
		// Todo
		console.log(searchValue);
	};

	return (
		<div className="search">
			<div className="searchInput">
				<button className="icon"onClick={handleSubmit}>
					<FaSearch />
				</button>
				<input
					type="text"
					placeholder='Search writing topics'
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
