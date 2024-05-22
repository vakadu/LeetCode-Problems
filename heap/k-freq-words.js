const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');

function freq(words, k) {
	let map = new Map(),
		result = [];

	for (let word of words) {
		map.set(word, map.get(word) + 1 || 1);
	}

	let heap = new MaxPriorityQueue({
		compare: (w1, w2) => {
			const { k: k1, v: v1 } = w1;
			const { k: k2, v: v2 } = w2;

			if (v1 > v2) {
				return -1;
			}
			if (v1 < v2) {
				return 1;
			}
			return k1.localeCompare(k2);
		},
	});

	for (let [key, val] of map) {
		heap.enqueue({ k: key, v: val }, val);
	}

	for (let i = 0; i < k; i++) {
		let { k } = heap.dequeue();
		result.push(k);
	}

	console.log(result);
}

freq(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4);

freq(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2);

function comparator(w1, w2) {
	if (w1.v > w2.val) return -1;
	if (w1.v < w2.v) return 1;

	const { k: k1 } = w1;
	const { k: k2 } = w2;

	return k1.localeCompare(k2);
}

// function sorted(arr) {
//     let a = arr.sort((a,b) =>
//         a.split(' ')[1].localeCompare(b.split(' ')[1])
//     )

//     console.log(a);
// }

// sorted(["vinod vakadu", "abd dev", "marco reus", "richord anthony", "abd dev"]);

// let arr = ["vinod vakadu", "yela nat", "marco reus", "richord anthony", "george king"];
// // let a = arr.map((a) => a.split(' ')[1]).sort(compare)

// function compare(a,b) {
//     return b.length-a.length
// }

// console.log(a);

// const occurances = {};
// words.forEach((word) => {
// 	if (occurances[word]) {
// 		occurances[word] = occurances[word] + 1;
// 	} else {
// 		occurances[word] = 1;
// 	}
// });

// // declare new priority queue
// const maxHeap = new MaxPriorityQueue({
// 	compare: (a, b) => {
// 		if (a.rank > b.rank) return -1; // do not swap
// 		if (a.rank < b.rank) return 1; // swap
// 		const { word: wordA } = a;
// 		const { word: wordB } = b;
// 		return wordA.localeCompare(wordB);
// 	},
// });
// // add all items to the priority queue
// for (const word in occurances) {
// 	maxHeap.enqueue({ word, rank: occurances[word] });
// }
// console.log(maxHeap);
// // take off k elements add to result
// const result = [];
// for (let i = 0; i < k; i += 1) {
// 	const { word } = maxHeap.dequeue();
// 	result.push(word);
// }

// console.log(result);
