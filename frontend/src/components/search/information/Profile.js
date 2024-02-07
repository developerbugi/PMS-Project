import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
import { userDataState, selectedIdState } from "../../../recoil/SearchRecoil";

//import image
import cameraIcon from "../../../assets/img/camera_enhance.svg";
import userImage from "../../../assets/img/logo.png";
import adminImg from "../../../assets/img/admin_label.svg";
import empImg from "../../../assets/img/sbimg.svg";
import EmployeeInfo from "./EmployeeInfo";
import random1 from "../../../assets/img/leaves-8517219_1280.jpg";
import random2 from "../../../assets/img/squirrel-8536537_1280.jpg";
import random3 from "../../../assets/img/sunset-8544672_1280.jpg";

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

const SSP = styled.div`
  margin-top: 0;
  margin-left: 4rem;
  font-size: 1.4rem;
  font-weight: 700;
`;

const SImgContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 190px;
  margin-left: 1rem;
`;

const SWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  height: 100%;
`;

const SInfoDiv = styled.div`
  border-top: 1px solid #ddd;
  height: 80%;
  margin: 1.5rem;
  padding: 2rem;
  overflow: auto; /* 내용이 넘칠 경우 스크롤 생성 */
`;

const SMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%; /* 40%의 높이를 차지하도록 설정 */
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

const SInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 190px;
  flex-direction: column;
  margin-top: 2.2rem;
`;

const SInfoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SItemTitle = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 800;
`;

const SItem = styled.div`
  flex: 1;
  margin-bottom: 3rem;
  font-size: 1rem;
  font-weight: 700;
`;

const SSPan = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
`;

const SInput = styled.input`
  width: 70%;
  margin-left: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.8rem;
  font-size: 1.2rem;

  ${(props) =>
    props.hasValue &&
    css`
      border: none;
      border-bottom: 1px solid transparent;
      outline: none;
    `}
`;

//랜덤값
const randomImages = [random1, random2, random3];

const Profile = () => {
  const userId = useRecoilValue(selectedIdState);
  const userData = useRecoilValue(userDataState).find(
    (user) => user.com_id === userId
  );

  // 초기값 설정
  const [name, setName] = useState(userData.name_kor);
  const [englishName, setEnglishName] = useState(
    userData ? userData.name_eng : ""
  );
  const [id, setEmployeeId] = useState(userData ? userData.com_id : "");
  const [department, setDepartment] = useState(userData ? userData.dep : "");
  const [position, setPosition] = useState(userData ? userData.rank_name : "");
  const [ssn, setSSN] = useState(userData ? userData.rrn : "");
  const [phoneNumber, setPhoneNumber] = useState(
    userData ? userData.mob_num : ""
  );

  const imageToShow =
    userId === 1
      ? userImage
      : randomImages[Math.floor(Math.random() * randomImages.length)];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "englishName":
        setEnglishName(value);
        break;
      case "id":
        setEmployeeId(value);
        break;
      case "department":
        setDepartment(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "ssn":
        setSSN(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <SWrap>
      <SMainDiv>
        <SImgContainer>
          <SImg src={imageToShow} alt="userImage" />
          <label htmlFor="profile-image-upload">
            <SCameraIcon src={cameraIcon} alt="Change Profile Picture" />
          </label>
          <input
            id="profile-image-upload"
            type="file"
            accept=".jpg, .jpeg, .png"
            style={{ display: "none" }}
          />
          {userId === 1 ? (
            <SDiv>
              <SLabelImg src={adminImg} alt="adminLabel" />
              <SP>admin</SP>
            </SDiv>
          ) : (
            <SDiv>
              <SLabelImg src={empImg} alt="empImg" />
              <SP>{id}</SP>
            </SDiv>
          )}
        </SImgContainer>
        <SInfoContainer>
          <SInfoRow>
            <SItemTitle>기본 정보</SItemTitle>
          </SInfoRow>
          <SInfoRow>
            <SItem>
              <SSPan>이름</SSPan>
              <SInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                hasValue={name.length > 0}
              />
            </SItem>
            <SItem>
              <SSPan>영문 이름</SSPan>
              <SInput
                type="text"
                value={englishName}
                onChange={(e) => setEnglishName(e.target.value)}
                hasValue={englishName.length > 0}
              />
            </SItem>
          </SInfoRow>
          <SInfoRow>
            <SItem>
              <SSPan>부서</SSPan>
              <SInput
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                hasValue={department.length > 0}
              />
            </SItem>
            <SItem>
              <SSPan>직급</SSPan>
              <SInput
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                hasValue={position.length > 0}
              />
            </SItem>
          </SInfoRow>
          <SInfoRow>
            <SItem>
              <SSPan>주민번호</SSPan>
              <SInput
                type="text"
                value={ssn}
                onChange={(e) => setSSN(e.target.value)}
                hasValue={ssn.length > 0}
              />
            </SItem>
            <SItem>
              <SSPan>핸드폰번호</SSPan>
              <SInput
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                hasValue={phoneNumber.length > 0}
              />
            </SItem>
          </SInfoRow>
        </SInfoContainer>
      </SMainDiv>
      <SInfoDiv>
        <EmployeeInfo />
      </SInfoDiv>
    </SWrap>
  );
};

export default Profile;
