import axios from 'axios'

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

//console.log(cardsContainer)

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        const articlesArr = []
        articlesArr.push(res.data.articles.javascript)
        articlesArr.push(res.data.articles.bootstrap)
        articlesArr.push(res.data.articles.technology)
        articlesArr.push(res.data.articles.jquery)
        articlesArr.push(res.data.articles.node)
        articlesArr.forEach(topic => {
            topic.forEach(article => {
                cardsContainer.appendChild(articleCardMaker(article))
            })
        })
        console.log(articlesArr)
    })
    .catch(err => {
        console.log(res)
    })

function articleCardMaker(articleObj){

    //create elements 
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCon = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')
    //give elements classes 
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCon.classList.add('img-container')

    //define structure 
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgCon)
    imgCon.appendChild(img)
    author.appendChild(name)
    //define content
    
    headline.textContent = articleObj.headline
    img.src = articleObj.authorPhoto
    name.textContent = articleObj.authorName

    //add eventlistener 

    card.addEventListener('click', (evt) => {
        console.log(headline)
    })
    return card 
}   

//console.log(articleCardMaker())