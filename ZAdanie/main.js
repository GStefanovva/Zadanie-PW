$(document).ready(function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const allIds = getAllIds(posts);
            console.log("All IDs:", allIds);

            const postsWithNam = getPostsWithNam(posts);
            console.log("Posts with 'nam':", postsWithNam);

            const simplifiedPosts = getSimplifiedPosts(posts);
            console.log("Simplified Posts:", simplifiedPosts);

            const totalIdsSum = getTotalIdsSum(posts);
            console.log("Total IDs Sum:", totalIdsSum);

            displayPosts(posts);
        })
        .catch(error => console.error('Error fetching posts:', error));

    function getAllIds(posts) {
        return posts.map(post => post.id);
    }

    function getPostsWithNam(posts) {
        return posts.filter(post => post.title.includes("nam"));
    }

    function getSimplifiedPosts(posts) {
        return posts.map(post => ({ id: post.id, title: post.title }));
    }

    function getTotalIdsSum(posts) {
        return posts.reduce((sum, post) => sum + post.id, 0);
    }

    function displayPosts(posts) {
        const postsContainer = $('#posts-container');
        posts.forEach(post => {
            const postElement = `
                <a href="https://jsonplaceholder.typicode.com/posts/${post.id}" class="post-link">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                </a>
            `;
            postsContainer.append(postElement);
        });
    }
});