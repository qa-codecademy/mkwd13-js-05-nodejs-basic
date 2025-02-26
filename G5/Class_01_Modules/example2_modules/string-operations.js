export const capitalize = str =>
	str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const reverse = str => str.split('').reverse().join('');

// 'abc' => ['a', 'b', 'c'] => ['c', 'b', 'a'] => 'cba'
