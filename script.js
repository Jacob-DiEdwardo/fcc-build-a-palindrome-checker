const textInput = document.getElementById('text-input');
const palindromeForm = document.getElementById('palindrome-form');
const result = document.getElementById('result');

const INPUT_REGEX = /[^a-zA-Z0-9]/gi;
const EMPTY_INPUT_ALERT_MESSAGE = 'Please input a value';

const validatePalindrome = input => {
  if (input === '') {
    alert(EMPTY_INPUT_ALERT_MESSAGE);
    return;
  }
  const userInput = input;
  result.innerText = '';
  const formattedInput = input.replace(INPUT_REGEX, '').toLowerCase();
  const isPalindrome = formattedInput === formattedInput.split('').reverse().join('');
  const resultText = `${userInput} is ${isPalindrome ? '' : 'not'} a palindrome`;
  result.innerText = resultText;
  result.classList.remove('hidden');
  textInput.value = '';
}

palindromeForm.addEventListener('submit', e => {
  e.preventDefault();
  validatePalindrome(textInput.value);
});
