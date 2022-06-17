// console.log('%c HI', 'color: firebrick')



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded')

    let breeds = []
    // on page load, fetches the images using the url above ⬆️
    // parses the response as JSON
    // adds image elements to the DOM for each 🤔 image in the array
    function getPics() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        return fetch(imgUrl) 
            .then(response => response.json())
            .then(response => {
                // console.log("response", response.message)
                const dogImageContainer = document.querySelector("#dog-image-container")
                // response.message.forEach(element => console.log(element));
                response.message.forEach(url => {
                    const img = document.createElement('img')
                    img.src = url
                    dogImageContainer.appendChild(img);
                    })
                // response.message.forEach(element => dogImageContainer.appendChild(response.message));

            })
    }
    getPics()

    // on page load, fetches all the dog breeds using the url above ⬆️
    // adds the breeds to the page in the <ul> provided in index.html
    function getBreeds() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        return fetch(breedUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response.message)
            const ul = document.querySelector("#dog-breeds")
            breeds = Object.keys(response.message)
            // console.log(objBreeds)
            // objBreeds.map(breed => {
            //     const li = document.createElement('li')
            //     li.textContent = (breed) 
            //     ul.appendChild(li)
                // li.addEventListener('click', colorChange)
                addBreedNameToDom(breeds)
            // })
        })
    }
    getBreeds()

// Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.
document.addEventListener("click", event => {
    if(event.target.matches('li')) {
        event.target.style.color = "magenta"
    }
})

function addBreedNameToDom(breeds) {
    const ul = document.querySelector("#dog-breeds")
    breeds.map(breed => {
        const li = document.createElement('li')
        li.textContent = (breed) 
        ul.appendChild(li)
    })
}
// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown (Links to an external site.).
// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet.

const dropdown = document.querySelector('#breed-dropdown')    
document.addEventListener("change", event => {
    const ul = document.querySelector("#dog-breeds")
    if(event.target.matches('#breed-dropdown')) {
        ul.innerHTML = ""
        const filteredBreeds = breeds.filter(breeds => breeds[0] === event.target.value)
        addBreedNameToDom(filteredBreeds)
    }
})

})