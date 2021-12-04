const { runner, debug } = require('../utils');

const actions = {
	forward: ({ h, d, a }, distance) => ({ h: h + distance, d: d + a * distance, a }),
	down: ({ h, d, a }, distance) => ({ h, d, a: a + distance }),
	up: ({ h, d, a }, distance) => ({ h, d, a: a - distance }),
};

function move(pos, [a, distance]) {
	return actions[a](pos, distance);
}

async function main(input) {
	const pos = input.reduce(move, { h: 0, d: 0, a: 0 });

	debug('pos', pos);

	pos.result = pos.d * pos.h;

	return pos;
}

runner(main, (l) => l
	.split(' ')
	.map((val, i) => i === 1 ? Number(val) : val));

module.exports = {
	main,
};