/* eslint-disable no-bitwise */
const { runner, debug } = require('../utils');

async function main(input) {
	debug('input', input);

	const firstLine = input[0];

	const counts = Array(firstLine.length).fill(0);
	const max = input.length;

	input.forEach((line) => {
		for (let i = 0; i < line.length; i++) {
			counts[i] += parseInt(line[i], 10);
		}
	});

	debug('max', max);
	debug('counts', counts);

	let gamma = 0;

	for (let i = 0; i < counts.length; i++) {
		if (counts[i] > (max - counts[i])) {
			gamma += 2 ** (counts.length - 1 - i);
		}
	}

	debug('gamma', gamma);

	const epsilon = (2 ** counts.length - 1) - gamma;

	debug('epsilon', epsilon);

	return gamma * epsilon;
}

runner(main, row => row);

module.exports = {
	main,
};