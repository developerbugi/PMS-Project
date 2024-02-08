import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

//import recoil
import { userVacationState } from "../../recoil/SearchRecoil";

const SearchVacation = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  //입력폼
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    month: "",
    day: "",
    reason: "",
  });

  const [userVacation, setUserVacation] = useRecoilState(userVacationState);

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setFormData({
      ...formData,
      year: String(date.getFullYear()),
      month: String(date.getMonth() + 1).padStart(2, "0"),
      day: String(day).padStart(2, "0"),
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const newData = {
      id: userVacation.length + 1,
      ...formData,
    };
    setUserVacation([...userVacation, newData]);
    setFormData({
      name: "",
      year: "",
      month: "",
      day: "",
      reason: "",
    });
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty${i}`} />);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <CalendarDate key={`day${i}`} onClick={() => handleDateClick(i)}>
          {i}
        </CalendarDate>
      );
    }

    return days;
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <SButton
          onClick={() =>
            setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
          }
        >
          이전
        </SButton>
        <SHeaderTitle>{`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월`}</SHeaderTitle>
        <SButton
          onClick={() =>
            setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
          }
        >
          다음
        </SButton>
      </CalendarHeader>
      <CalendarBody>
        <SDayDiv>일</SDayDiv>
        <SDayDiv>월</SDayDiv>
        <SDayDiv>화</SDayDiv>
        <SDayDiv>수</SDayDiv>
        <SDayDiv>목</SDayDiv>
        <SDayDiv>금</SDayDiv>
        <SDayDiv>토</SDayDiv>
        {renderCalendar()}
      </CalendarBody>
      {selectedDate !== null && (
        <RecordInput>
          <h3>{`${date.getFullYear()}년 ${
            date.getMonth() + 1
          }월 ${selectedDate}일`}</h3>
          <input
            type="text"
            name="name"
            placeholder="사원 이름"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="year"
            placeholder="년"
            value={formData.year}
            readOnly
          />
          <input
            type="text"
            name="month"
            placeholder="월"
            value={formData.month}
            readOnly
          />
          <input
            type="text"
            name="day"
            placeholder="일"
            value={formData.day}
            readOnly
          />
          <input
            type="text"
            name="reason"
            placeholder="사유"
            value={formData.reason}
            onChange={handleInputChange}
          />
          <RecordButton onClick={handleSave}>저장</RecordButton>
        </RecordInput>
      )}
    </CalendarContainer>
  );
};

const SHeaderTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
`;

const SDayDiv = styled.div`
  background-color: #91b7ff;
  padding: 1.3rem;
  border-radius: 0.3rem;
  border-left: solid 1px #fff;
  font-size: 1.2rem;
  font-weight: 700;
`;

const SButton = styled.button`
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

const RecordInput = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RecordButton = styled.button`
  margin-top: 10px;
`;

const CalendarContainer = styled.div`
  width: 68vw;
  height: 74vh;
  padding-top: 2rem;
  margin: auto;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const CalendarDate = styled.div`
  padding: 2.5rem;
  border-radius: 0.4rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: rgba(130, 178, 248, 0.5);
  }
`;

export default SearchVacation;
