const { runner, debug } = require('../utils');

const actions = {
	forward: ({ h, d }, distance) => ({ h: h + distance, d }),
	down: ({ h, d }, distance) => ({ h, d: d + distance }),
	up: ({ h, d }, distance) => ({ h, d: d - distance }),
};

function move(pos, [a, distance]) {
	return actions[a](pos, distance);
}

async function main(input) {
	const pos = input.reduce(move, { h: 0, d: 0 });

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