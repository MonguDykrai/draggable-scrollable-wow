export const util = {
  toString: function(src) {
    return Object.prototype.toString.call(src);
  },
  getEleById: function(src) {
    return document.querySelector(`#${src}`);
  }
};
