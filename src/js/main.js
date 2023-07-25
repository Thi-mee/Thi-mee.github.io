const scrambleName = () => {
  // get the name element and create an array of letters from the text-content
  // create a loop and scramble the letters on every iteration till the loop ends
  // set the scrambled letters as the text-content of the name element on every iteration
  const scrambledCharacters = 'abcdefhwxEJUVZ01$$$###&*`!';

  const name = document.querySelector('.full-name span');
  const nameTextArray = name.textContent.split('');
  const characterArray = [...nameTextArray];
  console.log(characterArray);

  characterArray.forEach((character, index) => {
    if (character === ' ') {
      return;
    }
    // while (Math.random() > 0.5) {
    const itv = setInterval(() => {
      characterArray[index] = scrambledCharacters[Math.floor(Math.random() * scrambledCharacters.length)];

      if (Math.random() > 0.9) {
        clearInterval(itv);
        characterArray[index] = nameTextArray[index];
      }
      name.textContent = characterArray.join('');
    }, 30);
    // }
  });
  name.textContent = characterArray.join('');

}

const init = () => {
  document.body.style.overflowY = 'scroll';
  document.querySelector('.loader').style.display = 'none';
  scrambleName();
}
window.addEventListener('load', init);



// action = "https://formspree.io/f/xlekeqej" method = "POST"

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  console.log(data);

  fetch("https://formspree.io/f/xlekeqej", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json"
    }
  }).then((response) => {
    const resAlert = document.createElement('div');
    resAlert.classList.add('alert');
    if (response.status === 200) {
      resAlert.classList.add('alert-success');
      resAlert.textContent = 'Thank you for your message!';
      form.reset();
    } else {
      resAlert.classList.add('alert-danger');
      resAlert.textContent = 'Oops! There was a problem.';
    }
  });
});

