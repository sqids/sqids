import { expect, test } from 'vitest';
import Sqids from '../src/index.ts';

test('uniques, low ranges', () => {
	const sqids = new Sqids();
	const set = new Set<string>();

	for (let i = 0; i != 1_000_000; i++) {
		const numbers = [i];
		const id = sqids.encode(numbers);
		set.add(id);
		expect.soft(sqids.decode(id)).toEqual(numbers);
	}

	expect.soft(set.size).toBe(1_000_000);
});

test('uniques, high ranges', () => {
	const sqids = new Sqids();
	const set = new Set<string>();

	for (let i = 100_000_000; i != 101_000_000; i++) {
		const numbers = [i];
		const id = sqids.encode(numbers);
		set.add(id);
		expect.soft(sqids.decode(id)).toEqual(numbers);
	}

	expect.soft(set.size).toBe(1_000_000);
});

test('uniques, multi', () => {
	const sqids = new Sqids();
	const set = new Set<string>();

	for (let i = 0; i != 1_000_000; i++) {
		const numbers = [i, i, i, i, i];
		const id = sqids.encode(numbers);
		set.add(id);
		expect.soft(sqids.decode(id)).toEqual(numbers);
	}

	expect.soft(set.size).toBe(1_000_000);
});