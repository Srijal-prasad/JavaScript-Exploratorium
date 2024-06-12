function sendEmails(emailList) {
    const sendEmail = (email) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Sent email to: ${email}`);
          resolve(`Email sent to: ${email}`);
        }, 500);
      });
    };
   const emailPromises = emailList.map(email => () => sendEmail(email));
    return batchPromises(emailPromises, 10);
  }  
   const emailList = [
    'user1@example.com',
    'user2@example.com',
    'user3@example.com',
    'user4@example.com',
    'user5@example.com',
    // ...more emails
  ];
    sendEmails(emailList).then(results => {
      console.log('All emails sent:', results);
    })
    .catch(error => {
      console.error('Error sending emails:', error);
    });
  