// src/Calendar.styles.js
import styled from 'styled-components';

export const CalendarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
    margin: 0px 40px;
    height: 95%;
    widtj: 100%;
`;

export const DayBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    box-sizing: border-box;
    background: #f5f5f5;
    border-radius: 15px;
    aspect-ratio: 1; /* Ensures the boxes are square */
    width: 100%;
`;