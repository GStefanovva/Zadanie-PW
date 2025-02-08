$(document).ready(function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            displayPosts(posts);
        })
        .catch(error => console.error('Error fetching posts:', error));

    function displayPosts(posts) {
        const postsContainer = $('#posts-container');
        posts.forEach(post => {
            const postElement = `
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            `;
            postsContainer.append(postElement);
        });
    }
});