// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //create elements
    const header = document.createElement('div')
    const span = document.createElement('span')
    const title = document.createElement('h1')
    const spanTwo = document.createElement('span')
    //give them classes 
    header.classList.add('header')
    span.classList.add('date')
    spanTwo.classList.add('temp')
    //give them structure 
    header.appendChild(span)
    header.appendChild(title)
    header.appendChild(spanTwo)
    //give them content
    span.textContent = 'MARCH 28, 2020'
    title.textContent = 'Lambda Times'
    spanTwo.textContent = '98'
    return header
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header())