import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as C from "../../../../components/index";
import Background from "../../../../assets/images/Background.svg";
import axios from "axios";
import moment from "moment";

const Update = () => {
  const [observation, setObservation] = useState("");
  const [feeling, setFeeling] = useState("");
  const [need, setNeed] = useState("");
  const [request, setRequest] = useState("");

  // 선택한 날짜를 상태로 관리
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchDiaryData(); // 컴포넌트가 마운트될 때와 selectedDate가 변경될 때 일기 데이터를 가져옵니다.
  }, [selectedDate]);

  // 클릭한 날짜에 해당하는 일기 데이터를 불러오는 함수
  const fetchDiaryData = () => {
    axios
      .get("http://localhost:5000/records", {
        params: {
          date: moment(selectedDate).format("YYYY-MM-DD"), // moment로 날짜 포맷 변경
        },
      })
      .then((response) => {
        const { observation, feeling, need, request } = response.data;
        setObservation(observation);
        setFeeling(feeling);
        setNeed(need);
        setRequest(request);
      })
      .catch((error) => {
        console.log("일기 데이터를 불러오는 중 오류 발생:", error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // 예시: 서버로 일기 엔트리를 업데이트하는 방법
    axios
      .put("http://localhost:5000/update-diary", {
        date: moment(selectedDate).format("YYYY-MM-DD"),
        observation,
        feeling,
        need,
        request,
      })
      .then((response) => {
        console.log(
          "일기 엔트리가 성공적으로 업데이트되었습니다:",
          response.data
        );
        // 업데이트 성공 시 필요한 작업 수행 (예: 성공 메시지 표시 등)
      })
      .catch((error) => {
        console.log("일기 엔트리 업데이트 중 오류 발생:", error);
      });
  };

  return (
    <Container>
      <C.Header />
      <FormContainer onSubmit={handleFormSubmit}>
        <Label>관찰</Label>
        <Textarea
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
        />

        <Label>느낌</Label>
        <Input
          type="text"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
        />

        <Label>욕구</Label>
        <Input
          type="text"
          value={need}
          onChange={(e) => setNeed(e.target.value)}
        />

        <Label>부탁</Label>
        <Input
          type="text"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />

        <SubmitButton type="submit">일기 업데이트</SubmitButton>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FormContainer = styled.form`
  width: 80%;
  max-width: 600px;
  margin-top: 20px;
`;

const Label = styled.label`
  color: white;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  background-color: #482bd9;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Update;
