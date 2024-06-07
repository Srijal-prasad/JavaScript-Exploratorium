const fetchUser = fetch('https://api.example.com/user');
const fetchPosts = fetch('https://api.example.com/posts');
const fetchComments = fetch('https://api.example.com/comments');

Promise.all([fetchUser, fetchPosts, fetchComments])
  .then((responses) => {
    return Promise.all(responses.map(response => response.json()));
  })
  .then((data) => {
    const [user, posts, comments] = data;
    console.log(user);
    console.log(posts);
    console.log(comments);
  })
  .catch((error) => {
    console.error(error);
  });


//Here, we're fetching data from three different APIs concurrently. 
//Promise.all ensures we wait for all the fetch operations to complete before processing the results.