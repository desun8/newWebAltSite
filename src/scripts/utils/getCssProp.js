const getCssProp = (name = '', elm = document.documentElement) => {
  return getComputedStyle(elm).getPropertyValue(name);
};

export default getCssProp;