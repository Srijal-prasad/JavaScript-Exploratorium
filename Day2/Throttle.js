function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  } 
  // Function to handle button clicks
  function handleClick() {
    console.log('Button clicked at', new Date().toISOString());
  }
  // Get the button element
  const button = document.getElementById('myButton'); 
  // Add throttled click event listener to the button
  button.addEventListener('click', throttle(handleClick, 2000));
  