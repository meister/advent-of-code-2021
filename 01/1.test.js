const { main } = require('./1');

describe('part 1', () => {
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
			263
		];

		const result = await main(values);

		expect(result).toBe(7);
	});

	test('alt', async () => {
		const values = [
			201,
			200,
			200,
			210,
			200,
			207,
			240,
			269,
			260,
			263
		];

		const result = await main(values);

		expect(result).toBe(5);
	});
});