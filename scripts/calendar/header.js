import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
export const renderHeader = () => {
 const displayedWeekStart = getItem('displayedWeekStart');
 const weekDays = generateWeekRange(displayedWeekStart);
 const headerHTML = weekDays.map((date, index) => {
   const dayOfWeek = daysOfWeek[date.getDay()]; 
   const dayOfMonth = date.getDate(); 

   return `
     <div class="calendar__day-label" data-hour="${index}">
       <span class="day-label__day-name">${dayOfWeek}</span>
       <span class="day-label__day-number">${dayOfMonth}</span>
     </div>
   `;
 }).join(''); 

 document.querySelector('.calendar__header').innerHTML = headerHTML;
};

renderHeader();


const createButton = document.querySelector('.button');
createButton.addEventListener('click', openModal());

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик