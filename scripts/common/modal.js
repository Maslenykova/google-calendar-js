const modalElem = document.querySelector('.modal');
const modalContentElem = document.querySelector('.modal__content');

export function openModal(y) {
    modalElem.classList.remove('hidden');
    modalContentElem.style.centar = `${y}px`;
  }
  
  export function closeModal() {
    modalElem.classList.add('hidden');
  }
  
  function onClickInsideModal(event) {
    event.stopPropagation();
  }
  
  modalContentElem.addEventListener('click', onClickInsideModal);
  modalElem.addEventListener('click', closeModal);


// опишите ф-ции openModal и closeModal
// модальное окно работает похожим на попап образом
// отличие в том, что попап отображается в месте клика, а модальное окно - по центру экрана