import React, { useState } from "react";
import styled from "styled-components";

const SearchGroup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // dummy Data
  // 사번 이름 부서 직급
  const dummyData = [
    { id: 1234, name: "정지은", department: "인사부", position: "대리" },
    {
      id: 2222,
      name: "홍길동",
      department: "IT기획",
      position: "사원",
    },
    {
      id: 3333,
      name: "홍홍홍",
      department: "IT기획",
      position: "사원",
    },
    {
      id: 4444,
      name: "길길길",
      department: "IT기획",
      position: "팀장",
    },
    {
      id: 5555,
      name: "캬캬캬",
      department: "마케팅",
      position: "대리",
    },
    {
      id: 6666,
      name: "쿄쿄쿄",
      department: "영업부",
      position: "사원",
    },
    {
      id: 6777,
      name: "쿄쿄쿄",
      department: "영업부",
      position: "사원",
    },
    {
      id: 6888,
      name: "쿄쿄쿄",
      department: "영업부",
      position: "사원",
    },
    {
      id: 6999,
      name: "쿄쿄쿄",
      department: "영업부",
      position: "사원",
    },
    {
      id: 6000,
      name: "쿄쿄쿄",
      department: "영업부",
      position: "사원",
    },
    {
      id: 6234,
      name: "쿄쿄쿄",
      department: "영업부",
      position: "사원",
    },
    {
      id: 6123,
      name: "쿄쿄쿄",
      department: "영업부",
      position: "사원",
    },
  ];

  // 이름이 일치하는 사람 필터링
  const handleSearch = () => {
    const results = dummyData.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
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
            <SListItem key={person.id}>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow for depth */
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
  background-color: #f9f9f9; /* Add background color */
  border-radius: 0.5rem; /* Add border radius for rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow for depth */
  transition: all 0.3s ease; /* Add transition for smooth hover effect */

  &:hover {
    transform: translateY(-2px); /* Add slight lift effect on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhance box shadow on hover */
  }

  > div {
    flex-grow: 1;
    text-align: center;
  }
`;

export default SearchGroup;
