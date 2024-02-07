import React, { useState } from "react";
import styled from "styled-components";

const SearchVacation = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [vacationReason, setVacationReason] = useState("");
  const [vacationRecord, setVacationRecord] = useState({});
  const [submittedDates, setSubmittedDates] = useState([]);

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setVacationReason(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedDate && vacationReason.trim() !== "") {
      setVacationRecord({
        ...vacationRecord,
        [selectedDate]: vacationReason.trim(),
      });
      setSubmittedDates([...submittedDates, selectedDate]);
    }
    setShowInput(false);
  };

  const renderCalendar = () => {
    const daysInMonth = [];
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const startDay = startDate.getDay();

    for (let i = 0; i < startDay; i++) {
      daysInMonth.push(<EmptyDay key={`empty-${i}`} />);
    }

    for (let date = 1; date <= endDate.getDate(); date++) {
      const isSubmitted = submittedDates.includes(date);
      daysInMonth.push(
        <Day
          key={date}
          onClick={() => handleDateClick(date)}
          submitted={isSubmitted}
        >
          {date}
        </Day>
      );
    }

    return (
      <SWrap>
        <Calendar>
          <MonthHeader>
            <PrevButton onClick={handlePrevMonth}>&lt;</PrevButton>
            <MonthName>
              {startDate.toLocaleString("default", { month: "long" })}{" "}
              {startDate.getFullYear()}
            </MonthName>
            <NextButton onClick={handleNextMonth}>&gt;</NextButton>
          </MonthHeader>
          <SDiv>{daysInMonth}</SDiv>
        </Calendar>
      </SWrap>
    );
  };

  return (
    <SWrap>
      <h2>휴가 기록</h2>
      {renderCalendar()}
      {showInput && (
        <InputContainer>
          <InputLabel>날짜: {selectedDate}</InputLabel>
          <InputField
            type="text"
            placeholder="휴가 사유를 입력하세요."
            onChange={handleInputChange}
          />
          <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
        </InputContainer>
      )}
      <VacationRecord>
        <RecordTitle>휴가 기록</RecordTitle>
        {Object.entries(vacationRecord).map(([date, reason]) => (
          <RecordItem key={date}>
            <span>{date}</span>: {reason}
          </RecordItem>
        ))}
      </VacationRecord>
    </SWrap>
  );
};

const SDiv = styled.div`
  display: flex;
`;

const SWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const Day = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  background-color: ${({ submitted }) => (submitted ? "#007bff" : "#f0f0f0")};
  color: ${({ submitted }) => (submitted ? "#fff" : "#000")};
  cursor: pointer;
  border-radius: 1rem;
`;

const EmptyDay = styled.div`
  background-color: transparent;
`;

const MonthHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const MonthName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const PrevButton = styled.button`
  cursor: pointer;
  font-size: 20px;
`;

const NextButton = styled.button`
  cursor: pointer;
  font-size: 20px;
`;

const InputContainer = styled.div`
  margin-top: 20px;
`;

const InputLabel = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const VacationRecord = styled.div`
  margin-top: 20px;
`;

const RecordTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const RecordItem = styled.div`
  margin-bottom: 5px;
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export default SearchVacation;
