'use strict';

const url = 'https://api.adviceslip.com/advice';

const diceBtn = document.querySelector('[data-dice-btn]');
const adviceId = document.querySelector('[data-advice-id]');
const adviceText = document.querySelector('[data-advice-text]');

async function fetchData() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return {
			id: data.slip.id,
			advice: data.slip.advice,
		};
	} catch (err) {
		alert(err);
	}
}

async function setAdvice() {
	const advice = await fetchData();
	adviceId.textContent = advice.id;
	adviceText.textContent = `"${advice.advice}"`;
	console.log(advice);
}

diceBtn.addEventListener('click', setAdvice);
