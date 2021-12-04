const { main } = require('./2');

describe('part 2', () => {
	test('example', async () => {
		const values = [
			[ 'forward', 5 ],
			[ 'down', 5 ],
			[ 'forward', 8 ],
			[ 'up', 3 ],
			[ 'down', 8 ],
			[ 'forward', 2 ],
		];

		const result = await main(values);

		expect(result).toEqual({
			a: 10,
			h: 15,
			d: 60,
			result: 900,
		});
	});
});