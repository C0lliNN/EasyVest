export const setupTooltips = () => {
  const elements = document.querySelectorAll('.tooltipped');
  //eslint-disable-next-line
  M.Tooltip.init(elements, {
    enterDelay: 400,
  });
};

export const setupModal = (headerText, headerClass, contentText) => {
  const header = document.querySelector('#modal h4');
  header.innerHTML = headerText;
  header.className = headerClass;

  const modalContent = document.querySelector('#modal p');
  modalContent.innerHTML = contentText;
};
