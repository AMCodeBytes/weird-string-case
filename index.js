function toWeirdCase(text){
	let result = '';
	const words = text.split(' ');

	for (let i = 0; i < words.length; i++) {
		word = words[i];

		for (let i = 0; i < word.length; i++) {
			if (i%2 === 0) {
				result += word.slice(i, i+1).toUpperCase();
			} else {
				result += word.slice(i, i+1).toLowerCase();
			}
		}

		result += ' ';
	}

	return result.trim();
}

toWeirdCase("String");//=> returns "StRiNg"
toWeirdCase("Weird string case");//=> returns "WeIrD StRiNg CaSe"
