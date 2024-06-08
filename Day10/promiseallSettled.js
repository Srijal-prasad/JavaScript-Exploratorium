// Sample promises
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'Promise 1 resolved'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Promise 2 rejected'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3500, 'Promise 3 resolved'));

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
      } else {
        console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
      }
    });
  });

//Output
// Promise 1 fulfilled with value: Promise 1 resolved
// Promise 3 fulfilled with value: Promise 3 resolved
// Promise 2 rejected with reason: Promise 2 rejected
