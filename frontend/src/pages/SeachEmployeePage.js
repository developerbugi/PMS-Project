import React, { useState } from "react";
import styled from "styled-components";

const SearchEmployeePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    koreanName: "",
    englishName: "",
    ssn: "",
    phoneNumber: "",
    employeeNumber: "",
    major: "",
    position: "",
    title: "",
    department: "",
    address: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      koreanName: "",
      englishName: "",
      ssn: "",
      phoneNumber: "",
      employeeNumber: "",
      major: "",
      position: "",
      title: "",
      department: "",
      address: "",
      email: "",
      notes: "",
    });
  };

  return (
    <SWrap>
      <EmployeeSystemContainer>
        <Header>
          <h1>사원 조회 시스템</h1>
        </Header>
        <main>
          <Row className="first-row">          
            <SearchSection>
              <label htmlFor="name">이름:</label>
              <InputField
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Button>검색</Button>
            </SearchSection>

            <ControlButtons>
              <Button>저장</Button>
              <Button>사번 부여</Button>
              <Button onClick={handleReset}>초기화</Button>
            </ControlButtons>
          </Row>
          <div className="info-section">
            <Row>
              <label htmlFor="koreanName">성명(한글):</label>
              <InputField
                type="text"
                id="koreanName"
                name="koreanName"
                value={formData.koreanName}
                onChange={handleChange}
              />
              <label htmlFor="englishName">성명(영문):</label>
              <InputField
                type="text"
                id="englishName"
                name="englishName"
                value={formData.englishName}
                onChange={handleChange}
              />
              <label htmlFor="ssn">주민번호:</label>
              <InputField
                type="text"
                id="ssn"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <label htmlFor="phoneNumber">휴대폰번호:</label>
              <InputField
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <label htmlFor="employeeNumber">사번:</label>
              <InputField
                type="text"
                id="employeeNumber"
                name="employeeNumber"
                value={formData.employeeNumber}
                onChange={handleChange}
              />
              <label htmlFor="major">전공:</label>
              <InputField
                type="text"
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <label htmlFor="position">직급:</label>
              <InputField
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
              <label htmlFor="title">직책:</label>
              <InputField
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <label htmlFor="department">부서:</label>
              <InputField
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <label htmlFor="address">주소:</label>
              <InputField
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <label htmlFor="email">이메일:</label>
              <InputField
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <label htmlFor="notes">기타 특이사항:</label>
              <TextAreaField
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </Row>
          </div>
        </main>
      </EmployeeSystemContainer>
    </SWrap>
  );
};

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

const EmployeeSystemContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
`;

const Header = styled.header`
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;

  &.first-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;

  label,
  input,
  button {
    margin-right: 10px;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const TextAreaField = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #007bff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SearchEmployeePage;
