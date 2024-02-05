import React from "react";
import styled from "styled-components";

const SWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const STitle = styled.h1`
  font-size: 5rem;
`;
const SLogo = styled.img``;

const MainPage = () => {
  return (
    <SWrap>
      <SLogo></SLogo>
      <STitle>인사시스템</STitle>
    </SWrap>
  );
};

export default MainPage;
