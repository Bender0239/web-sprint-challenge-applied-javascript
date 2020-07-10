import axios from 'axios'

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const topicsDiv = document.querySelector('.topics')
//console.log(topicsDiv)
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        const topics = res.data.topics
        //console.log(topics)
        topics.forEach(topic => {
            topicsDiv.appendChild(makeTopic(topic))
        })
    })
    .catch(err => {
        console.log(err)
    })

    function makeTopic(topic){
        
        const topicTab = document.createElement('div')
        topicTab.classList.add('tab')
        topicTab.textContent = topic

        return topicTab 
    }