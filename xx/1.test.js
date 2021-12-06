const { main } = require('./1');

describe('part 1', () => {
	test('example', async () => {
		const values = [
			0
		];

		const result = await main(values);

		expect(result).toEqual([
			0
		]);
	});
});