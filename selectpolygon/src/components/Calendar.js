import React, { useEffect, useState } from "react";
import { addDays, format, getDate, isSameDay, startOfWeek } from "date-fns";
import "./CalendarStyle.css";

const WeekCalendar = ({ date, onChange }) => {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  const handleDateClick = (selectedDate) => {
    onChange(selectedDate);
  };

  return (
    <div className="container">
      {week.map((weekDay, index) => {
        const textStyles = ["label"];
        const touchable = ["touchable"];

        const sameDay = isSameDay(weekDay.date, date);
        if (sameDay) {
          textStyles.push("selectedLabel");
          touchable.push("selectedTouchable");
        }

        return (
          <div className="weekDayItem" key={index}>
            <div className="weekDayText">{weekDay.formatted}</div>
            <button
              onClick={() => handleDateClick(weekDay.date)}
              className={touchable.join(" ")}
            >
              <span className={textStyles.join(" ")}>{weekDay.day}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

const getWeekDays = (date) => {
  const start = startOfWeek(date, { weekStartsOn: 1 }); // 주의 시작일 계산 (월요일부터 시작)

  const final = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = addDays(start, i); // 시작일로부터 i일째 날 계산
    final.push({
      formatted: format(currentDate, "EEE"),
      date: currentDate,
      day: getDate(currentDate),
    });
  }
  return final;
};

export default WeekCalendar;
