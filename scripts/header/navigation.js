import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector(
  '.navigation__displayed-month'
);
function renderCurrentMonth() {
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonth = months[currentMonthIndex];
  const displayedMonth = currentMonth + ' ' + currentYear;
  displayedMonthElem.textContent = displayedMonth;
}

renderCurrentMonth();


// const onChangeWeek = (event) => {

//   // при переключении недели обновите displayedWeekStart в storage
//   // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
// };
const onChangeWeek = (event) => {
let currentWeekStart = getItem('displayedWeekStart');
  
  if (event.target.classList.contains('next')) {
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  }
  
  if (event.target.classList.contains('prev')) {
    currentWeekStart.setDate(currentWeekStart.getDate() - 7);
  }

  setItem('displayedWeekStart', currentWeekStart);

 console.log(currentWeekStart);
}

export const initNavigation = () => {
  renderCurrentMonth();
  navElem.addEventListener('click', onChangeWeek);
};