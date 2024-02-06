import React, { useState } from "react";
import styled from "styled-components";
import employeeImage from '../img/Employee.png';

const JoinEmployeePage = () => {
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
        
        <main>
          <Row className="first-row">
          <Header>
          <h1>사원 등록 시스템</h1>
          </Header>
            <ControlButtons >
              <Button>저장</Button>
              <Button style = {{
                marginLeft : '5px'
              }}
              >사번 부여</Button>
              <Button onClick={handleReset}
              style = {{
                marginLeft : '5px'
              }}>초기화</Button>
            </ControlButtons>
          </Row>

          <div className="info-section">
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <img src ={employeeImage} 
            alt = "직원 고정 사진"
            style = {{
              width : '90px',
              height : '100px', 
              marginRight: '10px'
            }}
            />
            <div>
              <Row style = {{marginLeft : '10px'}}>
                <label htmlFor="koreanName"
                style = {{
                  width :'70px',
                  textAlign: 'center'
                }}
                >이름 : </label>
                <InputField
                  type="text"
                  id="koreanName"
                  name="koreanName"
                  value={formData.koreanName}
                  onChange={handleChange}
                  style = {{maxWidth :'100px'}}
                />
                <label htmlFor="englishName"
                style = {{
                  width :'70px',
                  marginLeft : '10px',
                  textAlign: 'center'
              }}
                >영문이름 : </label>
                <InputField
                  type="text"
                  id="englishName"
                  name="englishName"
                  value={formData.englishName}
                  onChange={handleChange}
                  style = {{maxWidth :'100px'}}
                />
                <label htmlFor="ssn"
                style = {{
                  width :'70px',
                  marginLeft : '10px',
                  textAlign: 'center'
                }}
                >주민번호 :</label>
                <InputField
                  type="text"
                  id="ssn"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleChange}
                  style = {{maxWidth :'100px'}}
                />
              </Row>
              <Row style = {{marginLeft : '10px'}}>
                <label htmlFor="phoneNumber"
                style = {{
                  width :'70px',
                  textAlign: 'center'
                }}
                >사번 :</label>
                <InputField
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style = {{maxWidth :'100px'}}
                />
                <label htmlFor="employeeNumber"
                style = {{
                  width :'70px',
                  marginLeft : '10px',
                  textAlign: 'center'
                }}
                >부서 :</label>
                <InputField
                  type="text"
                  id="employeeNumber"
                  name="employeeNumber"
                  value={formData.employeeNumber}
                  onChange={handleChange}
                  style = {{maxWidth :'100px'}}
                />
                <label htmlFor="major"
                style = {{
                  width :'70px',
                  marginLeft : '10px',
                  textAlign: 'center'
                }}
                >휴대폰번호 :</label>
                <InputField
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  style = {{maxWidth :'100px'}}
                />
              </Row>
            </div>
            </div>
            <Row style = {{marginTop : '20px'}}>
              <label htmlFor="position"
              style = {{
                width :'70px',
                textAlign: 'center'
                }}
              >직급 :</label>
              <InputField
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                style = {{maxWidth :'150px'}}
              />
              <label htmlFor="title"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >전공 :</label>
              <InputField
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style = {{maxWidth :'150px'}}
              />
              <label htmlFor="department"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >최종학력 :</label>
              <InputField
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                style = {{maxWidth :'150px'}}
              />
            </Row>
            <Row style = {{marginTop : '20px'}}>
              <label htmlFor="position"
              style = {{
                width :'70px',
                textAlign: 'center'
                }}
              >입사구분 :</label>
              <InputField
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                style = {{maxWidth :'150px'}}
              />
              <label htmlFor="title"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >입사일 :</label>
              <InputField
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style = {{maxWidth :'150px'}}
              />
              <label htmlFor="department"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >퇴사일 :</label>
              <InputField
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                style = {{maxWidth :'150px'}}
              />
            </Row>
            <Row>
              <label htmlFor="email"
              style = {{
                width :'70px',
                textAlign: 'center'
                }}>
                  이메일 :</label>
              <InputField
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style = {{maxWidth :'390px'}}
              />
              <label htmlFor="department"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >군필 :</label>
              <InputField
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                style = {{maxWidth :'150px'}}
              />
            </Row>
            <Row>
              <label htmlFor="email"
              style = {{
                width :'55px',
                textAlign: 'center'
                }}>주소 :</label>
              <InputField
                type="text"
                id="email"
                name="email"
                value={formData.email}
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
  max-width: 800px;
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
  background-color: #699CFF;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #477EBF;
  }
`;

export default JoinEmployeePage;
