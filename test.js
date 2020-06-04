let _ = require('lodash');
let assert = require('assert').strict;

require('./index');

assert.deepEqual(
	_.permutations([1, 2, 3], 2),
	[
		[1, 2],
		[1, 3],
		[2, 1],
		[2, 3],
		[3, 1],
		[3, 2],
	],
);
assert.deepEqual(
	_.permutations([1, 2, 3], 3),
	[
		[1, 2, 3],
		[1, 3, 2],
		[2, 1, 3],
		[2, 3, 1],
		[3, 1, 2],
		[3, 2, 1],
	],
);
assert.deepEqual(
	_.permutations([1, 2, 3], 1),
	[
		[1],
		[2],
		[3],
	],
);
assert.deepEqual(
	_.permutations([1, 2, 3], 0),
	[
		[],
	],
);
assert.deepEqual(
	_.permutations([1, 2, 3], 9),
	[],
);
assert.deepEqual(
	_.permutations([], 0),
	[
		[],
	],
);
assert.deepEqual(
	_.permutations([], 9),
	[],
);
