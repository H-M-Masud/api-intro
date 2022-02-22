fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(res => res.json())
.then(data => displayComment(data))

function displayComment(comments){
    const commentContainer = document.getElementById('comment-container');
    for(const comment of comments){
        console.log(comment)
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <h5>${comment.email}</h5>
        <p>${comment.body}</p>
        `
        commentContainer.appendChild(div)
    }
}