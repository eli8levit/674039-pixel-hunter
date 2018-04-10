const createElement = (str) => {
  let parser = new DOMParser();
  return parser.parseFromString(str, `text/html`).body.firstChild;
};

export default createElement;
