const repositoriosEl = document.getElementById('repositorios');

const createRepositorioItem = ({ id, name, full_name, html_url, description }) => {
    const article = document.createElement('article');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    article.id = id

    h1.innerHTML = name;

    h2.innerHTML = full_name;

    h3.innerHTML = html_url;

    p.innerHTML = description;

    article.appendChild(h1);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);

    return article;
}
const getDataFromGithub = () => {
    console.log(window.fetch)
    if(window.fetch){
        fetch('https://api.github.com/users/andersongns/repos')
        .then( response => {
            if(response.status === 200) return response.json()
        }).then(data => {
            data.map( item => {
                repositoriosEl.appendChild(createRepositorioItem(item));
            });
        })
        .catch( err => console.error(err));
    }
}

window.onload = function(){
    getDataFromGithub();
}