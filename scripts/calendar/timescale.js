import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
const time = createNumbersArray(0, 23);
const timescaleHTML = time.map(hour => {
  const formattedHour = hour < 10 ? `${hour}` : hour; 
  
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
