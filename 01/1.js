const { runner, debug } = require('../utils');

async function main(input) {
	let increases = 0;
	let decreases = 0;

	input.forEach((current, index) => {
		if (index) {
			const prev = input[index - 1];

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

		return current;
	});

	debug('increases', increases);
	debug('decreases', decreases);

	return increases;
}

runner(main);

module.exports = {
	main
};