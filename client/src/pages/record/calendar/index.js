import React, { useState } from "react";
import axios from "axios";
import CustomCalendar from "./customCalendar/index";
import { styled } from "styled-components";
import * as C from "../../../components/index";
import Background from "../../../assets/images/Background.svg";

const Calendar = () => {
  const [selectedDateData, setSelectedDateData] = useState(null);
  const [fetchError, setFetchError] = useState(false); // 에러 발생 여부를 상태로 관리

  const fetchDateData = (date) => {
    axios
      .get(`http://localhost:5000/records`, { params: { date } })
      .then((response) => {
        setSelectedDateData(response.data);
        setFetchError(false); // 데이터 가져오기 성공 시 에러 상태 초기화
      })
      .catch((error) => {
        console.log("There was an error fetching the data!", error);
        setSelectedDateData(null); // 데이터 가져오기 실패 시 selectedDateData 초기화
        setFetchError(false); // 에러 상태를 false로 설정하여 에러 화면이 나타나지 않도록 함
      });
  };

  return (
    <Container>
      <C.Header />
      <CalendarContainer>
        <CustomCalendar onDateSelect={fetchDateData} />
        <TextContainer>
          {selectedDateData ? (
            <>
              <Box>
                <h3>관찰</h3>
                {selectedDateData.length > 0
                  ? selectedDateData[0].record_observation
                  : "작성한 일기가 없습니다!"}
              </Box>
              <Box>
                <h3>느낌</h3>{" "}
                {selectedDateData.length > 0
                  ? selectedDateData[0].record_feeling
                  : "작성한 일기가 없습니다!"}
              </Box>
              <Box>
                <h3>욕구</h3>{" "}
                {selectedDateData.length > 0
                  ? selectedDateData[0].record_need
                  : "작성한 일기가 없습니다!"}
              </Box>
              <Box>
                <h3>부탁</h3>{" "}
                {selectedDateData.length > 0
                  ? selectedDateData[0].record_request
                  : "작성한 일기가 없습니다!"}
              </Box>
            </>
          ) : (
            <p></p>
          )}
        </TextContainer>
      </CalendarContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  gap: 150px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Box = styled.div`
  width: 600px;
  height: 100px;
  background-color: white;
  border: 2px solid black;
  overflow-y: auto;
  padding: 20px;
`;

export default Calendar;
