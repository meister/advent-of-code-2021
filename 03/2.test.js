const { main } = require('./2');

describe('part 2', () => {
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
			'01010'
		];

		const result = await main(values);

		expect(result).toEqual({
			o2: 23,
			co2: 10,
			result: 230
		});
	});
});