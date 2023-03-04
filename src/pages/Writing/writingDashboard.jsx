import { useState } from "react";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const WritingDashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SearchIcon = styled.i`
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 240px;
  height: 240px;
  background-color: #f0f0f0;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: #1890ff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const WritingDashboard = () => {
	const [searchText, setSearchText] = useState("");

	return (
		<WritingDashboardWrapper>
			<SearchWrapper>
				<SearchIcon className="fas fa-search" />
				<SearchInput
					type="text"
					placeholder="Search writing topics"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</SearchWrapper>
			<CardWrapper>
				<Card>
					<Link to="/writing-page">
						<PlusOutlined style={{ fontSize: "60px" }} />
					</Link>
				</Card>
				{/* 可以根据需要显示之前创建的卡片 */}
			</CardWrapper>
		</WritingDashboardWrapper>
	);
};

export default WritingDashboard;
