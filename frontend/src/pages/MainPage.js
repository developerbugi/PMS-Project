import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    90deg,
    #82b2f8 28.12%,
    #477ebf 65.62%,
    #477ebf 100%
  );
`;

const STitle = styled.h1`
  font-size: 3.8rem;
  color: white;
  animation: bounce 2s infinite alternate, shimmer 2s infinite linear;

  @keyframes bounce {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(10px);
    }
  }

  @keyframes shimmer {
    0% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.1); /* Less intense initial shadow */
    }
    50% {
      text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
        0 0 15px rgba(255, 255, 255, 0.5); /* Less intense intermediate shadow */
    }
    100% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.2); /* Less intense final shadow */
    }
  }
`;

const SButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 4vh auto;
  width: 90px;
  height: 63px;
  border: none;
  border-radius: 999px;
  font-size: 13px;
  font-family: "Pretendard Variable";
  font-weight: bold;
  background: white;
`;

const SButtonText = styled.span`
  font-size: 20px;
  font-family: "Pretendard Variable";
  font-weight: bold;
  background-image: linear-gradient(
    125.02deg,
    #699cff 28.12%,
    #477ebf 65.62%,
    #477ebf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;

const MainPage = () => {
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate("/search");
  };

  const navigateToJoin = () => {
    navigate("/join");
  };

  return (
    <SWrap>
      <STitle>서한그룹 인사시스템</STitle>
      <SButtonDiv>
        <SButton onClick={navigateToSearch}>
          <SButtonText>조회</SButtonText>
        </SButton>
        <SButton onClick={navigateToJoin}>
          <SButtonText>등록</SButtonText>
        </SButton>
      </SButtonDiv>
    </SWrap>
  );
};

export default MainPage;
