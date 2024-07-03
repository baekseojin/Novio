import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import {
  StyledCalendarWrapper,
  StyledCalendar,
  StyledDot,
  StyledDate,
} from "./styles";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ onDateSelect }) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [attendDay, setAttendDay] = useState([]);
  const [diaryText, setDiaryText] = useState("");

  useEffect(() => {
    fetchRecordDates(); // 컴포넌트 마운트 시 호출
  }, []);

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
    </StyledCalendarWrapper>
  );
};

export default CustomCalendar;
