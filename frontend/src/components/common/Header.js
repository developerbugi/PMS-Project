import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <SHeader>
      <STitle>인사마스터</STitle>
    </SHeader>
  );
};

const SHeader = styled.header`
  postion: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #2f3b76;
`;

const STitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1.2rem 1.8rem;
  font-size: 2rem;
  font-weight: 800;
  color: white;
`;

export default Header;
