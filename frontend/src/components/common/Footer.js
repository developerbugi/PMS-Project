import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>
        <Content>Team 16 | 정지은 정부길 이민혁 이세비 최휘윤</Content>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-items: center;
  background-color: #777777;
  padding: 3rem 2rem;
  height: 1vh;
`;

const Content = styled.p`
  font-size: 1.5rem;
  color: #f0f0f0;
`;

export default Footer;
