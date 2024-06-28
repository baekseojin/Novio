import CustomCalendar from "./customCalendar/index";
import { styled } from "styled-components";

const Calendar = () => {
  return (
    <CalendarContainer>
      <CustomCalendar />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  background-color: black;
  color: white;
`;

export default Calendar;
