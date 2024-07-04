import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { StyledCalendarWrapper, StyledCalendar, StyledDot } from "./styles";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ onDateSelect }) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [attendDay, setAttendDay] = useState([]);
  const [diaryText, setDiaryText] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for modal visibility

  useEffect(() => {
    fetchRecordDates(); // Component mount or date change, fetch record dates
  }, [date]); // Include date in dependency array to fetch records on date change

  const fetchRecordDates = () => {
    axios
      .get("http://localhost:5000/records", {
        params: {
          date: moment(date).format("YYYY-MM-DD"),
        },
      })
      .then((response) => {
        const dates = response.data.map((record) => ({
          date: moment(record.time).format("YYYY-MM-DD"),
          observation: record.record_observation,
          feeling: record.record_feeling,
          need: record.record_need,
          request: record.record_request,
        }));
        setAttendDay(dates);
        if (dates.length === 0) {
          setDiaryText("오늘 일기를 작성하지 않았어요.");
        } else {
          setDiaryText("");
        }
      })
      .catch((error) => {
        console.log("Error fetching record dates:", error);
      });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateSelect(moment(newDate).format("YYYY-MM-DD"));
    fetchRecordDates();
  };

  const handleDelete = () => {
    setShowDeleteModal(true); // Show the delete confirmation modal
  };

  const confirmDelete = () => {
    axios
      .delete(`http://localhost:5000/api/record`, {
        data: { date: moment(date).format("YYYY-MM-DD") },
      })
      .then((response) => {
        console.log("Record deleted successfully:", response.data);
        fetchRecordDates(); // Fetch updated records after deletion
        setDiaryText("기록이 삭제되었습니다.");
        setShowDeleteModal(false); // Close the modal after deletion
      })
      .catch((error) => {
        console.log("Error deleting record:", error);
      });
  };

  const cancelDelete = () => {
    setShowDeleteModal(false); // Close the modal without deleting
  };

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
        tileContent={({ date, view }) => {
          let html = [];
          if (
            attendDay.length > 0 &&
            attendDay.find((x) => x.date === moment(date).format("YYYY-MM-DD"))
          ) {
            html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
          }

          return <>{html}</>;
        }}
      />
      <ButtonContainer>
        <UpdateButton>수정</UpdateButton>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </ButtonContainer>

      {/* Modal for delete confirmation */}
      {showDeleteModal && (
        <Modal>
          <ModalContent>
            <h2>삭제 확인</h2>
            <p>정말로 기록을 삭제하시겠습니까?</p>
            <ButtonContainer>
              <ConfirmButton onClick={confirmDelete}>확인</ConfirmButton>
              <CancelButton onClick={cancelDelete}>취소</CancelButton>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      )}
    </StyledCalendarWrapper>
  );
};

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

const UpdateButton = styled.div`
  width: 100px;
  height: 50px;
  background-color: #482bd9;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DeleteButton = styled.div`
  width: 100px;
  height: 50px;
  background-color: #f6f4ff;
  color: #220f80;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ConfirmButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const CancelButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export default CustomCalendar;
