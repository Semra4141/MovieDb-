const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      newFunction(getLCP, onPerfEntry);
    });
  }
};

export default reportWebVitals;
function newFunction(getLCP, onPerfEntry) {
  getLCP(onPerfEntry);
}

