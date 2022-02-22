fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(res => res.json())
.then(data => displayPhoto(data))

function displayPhoto(photos){
    const photoContainer = document.getElementById('photo-container');
    for(const photo of photos){
        const div = document.createElement('div');
        div.classList.add('photo')
        div.innerHTML = `
        <h3>${photo.title}</h3>
        <img src="${photo.url}" "alt="">
        `
        photoContainer.appendChild(div)
    }
}