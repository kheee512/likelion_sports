// src/Calendar.js
import React from 'react';
import { CalendarWrapper, DayBox } from '../styles/CalendarStyles';

const Calendar = () => {
    const days = Array.from({ length: 35 }, (_, index) => index + 1);

    return (
    <CalendarWrapper>
        {days.map((day) => (
        <DayBox key={day}>{day}</DayBox>
        ))}
    </CalendarWrapper>
    );
};

export default Calendar;