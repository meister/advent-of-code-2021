const { runner, debug } = require('../utils');

async function main(input) {
	debug(input);

	return input;
}

runner(main);

module.exports = {
	main,
};