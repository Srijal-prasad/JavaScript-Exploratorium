function autoRetryPromise(fn, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attempt = (retriesLeft) => {
            fn()
                .then(resolve)
                .catch((error) => {
                    if (retriesLeft === 0) {
                        reject(error);
                    } else {
                        setTimeout(() => attempt(retriesLeft - 1), delay);
                    }
                });
        };
        attempt(retries);
    });
}

// Example usage with a file read operation
   autoRetryPromise(() => readFile('path/to/file'))
    .then(content => console.log('File read successful:', content))
    .catch(error => console.error('File read failed after retries:', error));
