import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
const time = createNumbersArray(1, 24);

const timescaleHTML = time.map(hour => {
  const formattedHour = hour <= 12 ? `${hour} AM` : `${hour} PM`; 
  
  return `
    <div class="time-slot">
      <span class="time-slot__time">${formattedHour}</span>
    </div>
  `;
}).join(''); 
document.querySelector('.calendar__time-scale').innerHTML = timescaleHTML;
};


  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
