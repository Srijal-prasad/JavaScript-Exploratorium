function authenticateUser(credentials) {
  showLoadingSpinner();
  return loginUser(credentials)
    .then(user => {
      console.log('User authenticated:', user);
    })
    .catch(error => {
      console.error('Authentication failed:', error);
    })
    .finally(() => {
      hideLoadingSpinner();
    });
}

function loginUser(credentials) {
  // Simulating an authentication request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isAuthenticated = Math.random() > 0.5;
      if (isAuthenticated) {
        resolve({ id: 1, name: 'John Doe' });
      } else {
        reject('Invalid credentials');
      }
    }, 6000);
  });
}

function showLoadingSpinner() {
  console.log('Loading spinner shown');
}

function hideLoadingSpinner() {
  console.log('Loading spinner hidden');
}

// Simulate user login
authenticateUser({ username: 'Srijal', password: '1234' });
