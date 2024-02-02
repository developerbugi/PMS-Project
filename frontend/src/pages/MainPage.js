import React from "react";
import styled from "styled-components";

//import components
import SearchBar from "../components/SearchBar";
import Profile from "../components/Profile";

const MainPage = () => {
  return (
    <SWrap>
      <Profile />
      <SearchBar />
    </SWrap>
  );
};

const SWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default MainPage;
