const { main } = require('./1');

describe('part 1', () => {
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
			h: 15,
			d: 10,
			result: 150,
		});
	});
});