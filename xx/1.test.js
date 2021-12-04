const { main } = require('./1');

describe('part 1', () => {
	test('example', async () => {
		const values = [
			'x',
		];

		const result = await main(values);

		expect(result).toEqual([
			'x',
		]);
	});
});