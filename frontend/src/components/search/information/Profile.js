import React, { useState, useEffect } from "react";
import styled from "styled-components";

//import image
import cameraIcon from "../../../assets/img/camera_enhance.svg";
import userImage from "../../../assets/img/logo.png";
import adminImg from "../../../assets/img/admin_label.svg";

const SImgContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 190px;
  margin-left: 1rem;
`;

const SCameraIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 12px;
  width: 12px;
  padding: 10px; // 원의 크기를 조절하는 데 사용되는 패딩
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transform: translate(-20px, -50px);
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5); // 그림자 추가
`;

const SImg = styled.img`
  margin: 2rem;
  height: 120px;
  width: 120px;
  background-color: white;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2); // 그림자 추가
  object-fit: cover;
  border-radius: 999px;
`;

const SP = styled.div`
  margin-top: 0;
  margin-left: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
`;

const SMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const SDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLabelImg = styled.img`
  width: 5rem;
  height: 1%.5rem;
`;
const Profile = () => {
  return (
    <SMainDiv>
      <SImgContainer>
        <SImg src={userImage} alt="userImage" />
        <label htmlFor="profile-image-upload">
          <SCameraIcon src={cameraIcon} alt="Change Profile Picture" />
        </label>
        <input
          id="profile-image-upload"
          type="file"
          accept=".jpg, .jpeg, .png"
          style={{ display: "none" }}
        />
        <SDiv>
          <SLabelImg src={adminImg} alt="adminLabel" />
          <SP>admin</SP>
        </SDiv>
      </SImgContainer>
    </SMainDiv>
  );
};

export default Profile;
