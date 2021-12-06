const { runner, debug } = require('../utils');

async function main(input) {
	let increases = 0;
	let decreases = 0;

	for (let i = 2; i < input.length; i++) {
		const current = input[i] + input[i - 1] + input[i - 2];

		if (i > 2) {
			const prev = input[i - 1] + input[i - 2] + input[i - 3];

			if (prev < current) {
				debug(`${current} (increased)`);
				increases += 1;
			} else {
				debug(`${current} (decreased)`);
				decreases += 1;
			}
		} else {
			debug(`${current} (N/A)`);
		}

		debug('increases', increases);
		debug('decreases', decreases);
	}

	return increases;
}

runner(main);

module.exports = {
	main
};