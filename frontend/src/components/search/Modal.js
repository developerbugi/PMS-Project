import React, { useState } from "react";
import Modal from "react-modal";

import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const StyledTextarea = styled.textarea`
  width: 400px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  margin: 5px;
  cursor: pointer;

  &.confirm {
    background-color: #4caf50;
    color: #fff;
  }

  &.cancel {
    background-color: #ddd;
    color: #333;
  }

  &:hover {
    background-color: #bbb;
  }
`;
const Modal = ({ isOpen, onClose, onSubmit, comId }) => {
  const [empTmnDate, setEmpTmnDate] = useState("");
  const [resignReason, setResignReason] = useState("");

  const handleEmpTmnDateChange = (event) => {
    setEmpTmnDate(event.target.value);
  };

  const handleResignReasonChange = (event) => {
    setResignReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSubmit(comId, empTmnDate, resignReason);
    onClose(); // Close the modal after successful submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 999, // Ensure the modal has higher z-index for visibility
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          padding: "20px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#fff",
        },
      }}
    >
      <h2>직원 퇴사</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="resign-reason">퇴사사유:</StyledLabel>
        <StyledTextarea
          id="resign-reason"
          value={resignReason}
          onChange={handleResignReasonChange}
          required
        />
        <div>
          <StyledButton className="confirm" type="submit">
            확인
          </StyledButton>
          <StyledButton className="cancel" onClick={onClose}>
            취소
          </StyledButton>
        </div>
      </StyledForm>
    </Modal>
  );
};

export default Modal;
