import React, { useState } from "react";
import moment from "moment";
import { StyledCalendarWrapper, StyledCalendar, StyledDot } from "./styles";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const attendDay = ["2023-12-03", "2023-12-13"]; // 출석한 날짜 예시

  const handleDateChange = (newDate) => {
    setDate(newDate);
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
          if (attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
          }
          return <>{html}</>;
        }}
      />
    </StyledCalendarWrapper>
  );
};

export default CustomCalendar;
