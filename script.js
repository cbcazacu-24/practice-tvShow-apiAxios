const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {

    e.preventDefault();
    const searchTerm = form.elements.query.value;

    const config = {params: {q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)

    makeImages(res.data)

    form.elements.query.value = '';
    deleteImages();
})

const makeImages = (shows) => {
    for (let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        } 
    }
}
deleteImages = () => {
    document.querySelector('#delete').addEventListener('click', () => {
        for (const img of document.querySelectorAll('img')) {
        img.remove()
    }
    })
}