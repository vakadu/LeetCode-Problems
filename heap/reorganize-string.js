const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

function reorganize(s) {
	let map = new Map(),
		heap = new MaxPriorityQueue(),
		res = '';

	for (let char of s) {
		map.set(char, map.get(char) + 1 || 1);
	}

	for (let [key, val] of map) {
		heap.enqueue({ k: key, v: val }, val);
	}

	console.log(map, heap, res);

	let prev = null;

	while (!heap.isEmpty()) {
		let item = heap.dequeue().element;
		map.set(item.k, map.get(item.k) - 1);

		if (prev !== null && map.get(prev.k) > 0) {
			heap.enqueue({ k: prev.k, v: map.get(prev.k) }, map.get(prev.k));
		}

		prev = item;
		res += item.k;
	}

	// if (res.length !== s.length) {
	// 	return '';
	// }

	console.log(map, heap, res);
}

reorganize('aabbcc');
