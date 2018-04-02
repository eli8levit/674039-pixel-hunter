const changeView = (current, template) => {
  current.parentNode.replaceChild(template, current);
};

export default changeView;
