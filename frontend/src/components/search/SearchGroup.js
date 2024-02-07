import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//import recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedIdState, userDataState } from "../../recoil/SearchRecoil";

//import component
import Profile from "./information/Profile";

const SearchGroup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);
  const navigate = useNavigate();
  const userData = useRecoilValue(userDataState);

  // 이름이 일치하는 사람 필터링
  const handleSearch = () => {
    const results = userData.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleListItemClick = (id) => {
    setSelectedId(id);
    navigate(`/profile/${id}`); // 해당 ID를 포함한 URL로 페이지 이동
  };

  // 엔터 키 입력 처리
  // 아무것도 입력하지 않으면 모든 데이터가 뜨는 것 수정
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SWrap>
      <SSearchbarDiv>
        <STitle>사원 조회</STitle>
        <SSearchBar
          type="text"
          placeholder="이름을 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // 엔터 키 입력 감지
        />
        <SSearchButton onClick={handleSearch}>검색</SSearchButton>
      </SSearchbarDiv>
      <SSearchResultDiv>
        <SSearchResults>
          <SListItemHeader>
            <div>사번</div>
            <div>이름</div>
            <div>부서</div>
            <div>직급</div>
          </SListItemHeader>
          {searchResults.map((person) => (
            <SListItem
              key={person.id}
              onClick={() => handleListItemClick(person.id)}
            >
              <div>{person.id}</div>
              <div>{person.name}</div>
              <div>{person.department}</div>
              <div>{person.position}</div>
            </SListItem>
          ))}
        </SSearchResults>
      </SSearchResultDiv>
    </SWrap>
  );
};

const SListItemHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #ddd;
  height: 4rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #91b7ff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 800;
  font-size: 1.4rem;

  > div {
    flex-grow: 1;
    text-align: center;
  }
`;

const STitle = styled.header`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const SWrap = styled.div`
  padding: 1rem;
  height: 100%;
`;

const SSearchbarDiv = styled.div`
  height: 8vh;
`;

const SSearchResultDiv = styled.div`
  /* height: 85%; */
`;

const SSearchBar = styled.input`
  margin-bottom: 1rem;
  width: 15vw;
  height: 3vh;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;

const SSearchButton = styled.button`
  padding: 0.8rem 1.2rem;
  margin-left: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #82b2f8;
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background-color: #82b2f8;
    color: #fff;
  }
`;

const SSearchResults = styled.div`
  margin-top: 0.8rem;
  height: 65vh;
  overflow-y: auto;
`;

const SListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #ddd;
  height: 4rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  > div {
    flex-grow: 1;
    text-align: center;
  }
`;

export default SearchGroup;
