import _ from 'lodash';

export default function(collection, n) {
	let array = _.values(collection);
	if (array.length < n) {
		return [];
	}
	let recur = ((array, n) => {
		if (--n < 0) {
			return [[]];
		}
		let permutations = [];
		array.forEach((value, index, array) => {
			array = array.slice();
			array.splice(index, 1);
			recur(array, n).forEach(permutation => {
				permutation.unshift(value);
				permutations.push(permutation);
			});
		});
		return permutations;
	});
	return recur(array, n);
}
