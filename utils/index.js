const { readFile } = require('fs/promises');
const { dirname } = require('path');
const process = require('process');

async function getInputFile(input) {
	const dir = dirname(require.main.filename);

	const contents = await readFile(`${dir}/${input}.txt`, 'utf-8');

	return contents;
}

const toNumber = (line) => Number(line);

async function runner(fn, parser = toNumber) {
	const file = await getInputFile('input');
	const values = file.trim().split('\n').map(parser);

	if ((process.mainModule && process.mainModule.filename) && require.main.filename === process.mainModule.filename) {
		const result = await fn(values);
		console.log(result);
	}
}

function debug(...args) {
	if (process.env.DEBUG) {
		console.log(...args);
	}
}

module.exports = {
	runner,
	debug,
	toNumber
};