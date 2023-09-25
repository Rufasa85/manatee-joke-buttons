const showPunchlineButton = document.getElementById('showPunchline');
const punchlineElement = document.getElementById('punchline');
const setupElement = document.getElementById('setup');


const JoePunchlines = 'https://manateejokesapi.herokuapp.com/manatees/random'

showPunchlineButton.addEventListener('click', () => {

  fetch(JoePunchlines)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
      setupElement.textContent = data.setup
      punchlineElement.textContent = data.punchline; 
      quoteContainer.style.display = 'block';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});