const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Tanvi'; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'janne';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'Naa Tum meri chudail kamini gori chiti ullu ghtiya neech bekaar chi chi thu thu nahi ho';
	}
});