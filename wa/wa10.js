const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = "It was 94 fahrenheit outside, so :insertx: explored the great outdoors. Upon reaching :inserty:, they yelled, 'Giggity!', then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: wants to weigh 300 pounds, and it was a hot day.";
let insertX = ["Michael Jackson", "The Pope", "Mordecai"];
const insertY = ["Chick-fil-a", "the gym", "McDonald's"];
const insertZ = ["made a sandwich", "chugged an energy drink", "ate a burger"];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round((300/14)) + " stone"; 
    const temperature =  Math.round((94-32) * (5/9)) + " centigrade"; 

    newStory = newStory.replace("94 fahrenheit", temperature);

    newStory = newStory.replace("300 pounds", weight);
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}