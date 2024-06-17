function* fetchData() {
    const user = yield fetch('https://api.example.com/user').then(res => res.json());
    console.log(user);
  
    const posts = yield fetch(`https://api.example.com/users/${user.id}/posts`).then(res => res.json());
    console.log(posts);
  
    const comments = yield fetch(`https://api.example.com/posts/${posts[0].id}/comments`).then(res => res.json());
    console.log(comments);
  }
  
  const iterator = fetchData();
  
  function handleAsync(iterator, result) {
    const { value, done } = iterator.next(result);
    if (!done) {
      if (value instanceof Promise) {
        value.then(res => handleAsync(iterator, res));
      }
    }
  }
  
  handleAsync(iterator);
  