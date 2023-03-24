  const blogIdgetter = document.getElementById('addCommentButton');
    const blog_id = blogIdgetter.dataset.id
    
  console.log(blog_id)

    const newFormHandler = async (event) => {
    event.preventDefault();   
    
  
    const title = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ title, description, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blog' + blog_id);
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document
  .querySelector('#addCommentButton')
  .addEventListener('submit', newFormHandler);