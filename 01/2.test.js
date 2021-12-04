const { main } = require('./2');

describe('part 2', () => {
	test('example', async () => {
		const values = [
			199,
			200,
			208,
			210,
			200,
			207,
			240,
			269,
			260,
			263,
		];

		const result = await main(values);

		expect(result).toBe(5);
	});
});