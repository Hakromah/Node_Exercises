function luckyDraw(player) {
	return new Promise((resolve, reject) => {
		const win = Boolean(Math.round(Math.random()));

		process.nextTick(() => {
			if (win) {
				resolve(`${player} won a prize in the draw!`);
			} else {
				reject(new Error(`${player} lost the draw.`));
			}
		});
	});
}

const getResults = async (player) => {
	try {
		const result = await luckyDraw(player)
		console.log(result);

	} catch (error) {
		console.log(new Error('There is error'));
	}
}
getResults('Tina');
getResults('Jorge');
getResults('Julien');