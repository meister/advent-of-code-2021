/* eslint-disable no-bitwise */
const { runner, debug } = require('../utils');
const { main: diagnostic } = require('./1');

async function filter(list, type, index = 0) {
	const bitLength = list[0].length;
	const report = await diagnostic(list);
	const filterBit = report[type].toString(2).padStart(bitLength, '0')[index];

	const filteredList = list.filter(val => val[index] === filterBit);

	if (filteredList.length > 1) {
		return filter(filteredList, type, index + 1);
	}

	debug('Final', filteredList[0]);

	return filteredList[0];
}

async function main(input) {
	debug('input', input);

	const report = await diagnostic(input);
	debug('report', report);

	const o2Filter = await filter(input, 'gamma');
	const co2Filter = await filter(input, 'epsilon');

	debug('o2Filter', o2Filter);
	debug('co2Filter', co2Filter);

	const o2 = parseInt(o2Filter, 2);
	const co2 = parseInt(co2Filter, 2);

	return {
		o2,
		co2,
		result: o2 * co2
	};
}

runner(main, row => row);

module.exports = {
	main
};