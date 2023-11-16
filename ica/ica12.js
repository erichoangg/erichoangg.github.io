const newBtn = document.querySelector("#js-new-quote");
const ansBtn = document.querySelector("#js-tweet");
let question = "";
let answer = "";

newBtn.addEventListener("click", getQuote);
// ansBtn.addEventListener("click", getAns);
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote(){
    try{
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
        answer = json['answer'];
        displayAnswer(answer);
    }
    catch(err){
        console.log(err);
        alert("Fail");
    }
}

function getAns(){
    displayAnswer(answer);
}

function displayQuote(question){
    const questionTxt = document.querySelector("#js-quote-text");
    questionTxt.textContent = question;
}

function displayAnswer(ans){
    const ansTxt = document.querySelector("#js-answer-text");
    ansTxt.textContent = ans;
}

getQuote();