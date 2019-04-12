export function debounce(func, wait) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };

    later.cancel = function () {
      clearTimeout(timeout);
      timeout = null;
    };


    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    return later;
  };
}