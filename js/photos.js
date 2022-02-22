function consolGellary(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(check => gellaryFunc(check))
}
consolGellary();

function gellaryFunc(photos){
    const box = document.getElementById('gellary')
    for(const photo of photos){
        console.log(photo);
        const a = document.createElement('a');
        a.innerHTML = `
        <h4>${photo.title}</h4>
        <img src="${photo.url}">
        `;
        box.appendChild(a);
    }
}