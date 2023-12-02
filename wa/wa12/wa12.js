const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);
const catBtn = document.querySelector('#js-category').addEventListener('click', categorySelect);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');
let categoryTxt = document.querySelector('#js-category-text')

let answer = '';
let category = 'general';
const categoryArr = ['general', 'programming', 'dad'];
let categoryIdx = 0;

// this is the endpoint for the API that we want to get a reponse from
const endpoint = 'https://official-joke-api.appspot.com/random_joke';

async function getQuote() {
   // try -> tries something; if it returns an error, it puts us into the catch block
    try {
        const response = await fetch(endpoint);
        // if !response.ok is "if the response ISN'T okay (status code 200)"
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        
        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        const joke = json['type'];
        displayCategory(joke);
        displayQuote(json['setup']);
        answer = json['punchline'];
        answerTxt.textContent = '';
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

// this function shows the question
function displayQuote(question) {
    questionTxt.textContent = question;
}

// this function shows the answer
function displayAnswer() {
    answerTxt.textContent = answer;
}

// this function shows the category
function displayCategory() {
    categoryTxt.textContent = categoryArr[categoryIdx];
}

// this function changes the category
function categorySelect(){
    categoryTxt.textContent = categoryArr[categoryIdx];
    categoryIdx++;

    if (categoryIdx === categoryArr.length){
    categoryIdx = 0;
    }
    getQuote();
}
// we run getQuote once when the script first loads to populate a question
// when the page is loading
getQuote();