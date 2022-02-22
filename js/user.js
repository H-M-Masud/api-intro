fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res => res.json())
.then(data => displayUser(data))

function displayUser(users){
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}, Email: ${user.email}`
        userContainer.appendChild(li)
    }
}
