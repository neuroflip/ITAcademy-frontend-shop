const MODAL_ID = 'cartModal';

const prepareModalToOpen = (callback) => {
  const modalFragmentElement = document.getElementById(MODAL_ID);
  
  modalFragmentElement.addEventListener('show.bs.modal', function () {
    callback();
  });
};

export { prepareModalToOpen }; 