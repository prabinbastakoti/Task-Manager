const DOMElements = (() => {
  const container = document.querySelector(".itemsContainer");

  const test = () => {
    container.innerHTML = "hello";
  };
  return { test };
})();

const renderContainer = () => {
  DOMElements.test();
};

const tasksInbox = () => {
  renderContainer();
};

export default tasksInbox;
