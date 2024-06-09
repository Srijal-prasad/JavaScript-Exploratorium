const fetchArticleFromSource1 = () =>
    fetch('https://news-source1.com/article').then(response => response.json());
  
  const fetchArticleFromSource2 = () =>
    fetch('https://news-source2.com/article').then(response => response.json());
  
  const fetchArticleFromSource3 = () =>
    fetch('https://news-source3.com/article').then(response => response.json());
  
  Promise.any([fetchArticleFromSource1(), fetchArticleFromSource2(), fetchArticleFromSource3()])
    .then((article) => {
      console.log('Displaying article:', article);
    })
    .catch((error) => {
      console.error('Failed to fetch article from all sources:', error);
    });
  