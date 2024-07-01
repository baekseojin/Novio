import CustomCalendar from "./customCalendar/index";
import { styled } from "styled-components";
import * as C from "../../../components/index";
import Background from "../../../assets/images/Background.svg";

const Calendar = () => {
  return (
    <Container>
      <C.Header />
      <CalendarContainer>
        <CustomCalendar />
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
`;

export default Calendar;
