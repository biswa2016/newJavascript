let name = ["biswa", "ranjan", "nayak"];
let value = [true, {}, [], 2, "string"];


// Insertion - it depends (end O(1) push())  (beginning O(n) swift())
// Removal - it depends (end O(1) pop())  (beginning O(n) unSwift())
// Searing - O(n)
// Access - O(1)

//  Arrays  methods
// Access	 arr[index]	                 O(1)
// Adding at end	push()	             O(1)
// Removing from end	pop()	         O(1)
// Adding at start	unshift()	         O(n)
// Removing from start	shift()  	     O(n)
// Insertion/Removal slice() splice()	 O(n)
// Searching	indexOf(), find()	     O(n)
// Sorting	sort()	                     O(n log n)
// Reversing	reverse()	             O(n)
// Iteration	forEach(), map()	     O(n)

// for, forEach, map, filter, reduce -      O(n)
// concat()	Merge arrays	             O(n + m)