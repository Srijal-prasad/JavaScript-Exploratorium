document.addEventListener('DOMContentLoaded', () => {
    const Input = document.getElementById('comment-input'); // <input type="text" id="comment-input" placeholder="Enter your comment">
    const CmntBtn = document.getElementById('add-comment-btn');// <button id="add-comment-btn">Add Comment</button>
    const cmntlst = document.getElementById('comments-list'); //  <div id="comments-list"></div>
    CmntBtn.addEventListener('click', () => {
      const commentText = Input.value.trim();
      if (commentText) {
        addComment(commentText);
        Input.value = '';
      }
    });
    cmntlst.addEventListener('click', (event) => {
      if (event.target && event.target.matches('.delete-btn')) {
        const commentItem = event.target.closest('.comment-item');
        cmntlst.removeChild(commentItem);
      }
    });
  
    function addComment(comment) {
      const commentItem = document.createElement('div');
      commentItem.className = 'comment-item';
      commentItem.innerHTML = `
        <span>${comment}</span>
        <button class="delete-btn">Delete</button>
      `;
      cmntlst.appendChild(commentItem);
    }
  });
  