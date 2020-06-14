
let words = ["телефон", "веселка", "кава", "одяг", "машина", "штанга", "ноутбук"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
let remainingLetters = word.length;
let count = remainingLetters + 3;
while (remainingLetters > 0 && count !== 0) {
	alert(answerArray.join(" "));
	let guess = prompt("Напишіть букву або натисніть ʼСкасуватиʼ для виходу з гри.");
	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Введіть лише одну букву!");
	} else {
		count--;
		let guessLowerCase = guess.toLowerCase();
		for (let j = 0; j < word.length; j++) {
			if (word[j] === guessLowerCase) {
				answerArray[j] = guessLowerCase;
				remainingLetters--;
			}
		}
	}
}
if (count == 0) {
	alert("Вибачте, спроби закінчились...(");
} else {
	alert(answerArray.join(" "));
	alert("Було загадано слово - " + word);
}
