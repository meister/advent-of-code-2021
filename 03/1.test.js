const { main } = require('./1');

describe('part 1', () => {
	test('example', async () => {
		const values = [
			'00100',
			'11110',
			'10110',
			'10111',
			'10101',
			'01111',
			'00111',
			'11100',
			'10000',
			'11001',
			'00010',
			'01010',
		];

		const result = await main(values);

		expect(result).toEqual(198);
	});
});