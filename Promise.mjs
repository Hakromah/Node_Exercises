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

luckyDraw('Joe')
	.then((el) => console.log(el))
	.then(
		luckyDraw('Caroline')
			.then((caroline) => console.log(caroline))
			.catch((err) => console.error(err))
	)
	.then(
		luckyDraw('Sabrina')
			.then((sabrina) => console.log(sabrina))
			.catch((err) => console.error(err))
	)
	.catch((err) => console.log(err));
