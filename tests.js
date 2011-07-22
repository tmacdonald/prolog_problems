var undefined;

test('Lists 1', function() { 
	ok(p101([]) === undefined, 'Last element of empty list is undefined');
  ok(p101([1]) === 1, 'Last element of single element list is the one element');
	ok(p101([1,2,3]) === 3, 'Last element of a multi element list is the last element');  
});

test('Lists 2', function() {
	ok(p102([]) === undefined, 'Second last element of an empty list is undefined');
	ok(p102([1]) === undefined, 'Second last element of a single element list is undefined');
	ok(p102([1,2]) === 1, 'Second last element of a two element list is the first element');
	ok(p102([1,2,3]) === 2, 'Second last element of a three element list is the second element');
});

test('Lists 3', function(){
	ok(p103([], 1) === undefined, 'kth element of an empty list is undefined');
	ok(p103([1], 1) === 1, '1st element of a single element list is the single element');
	ok(p103([1], 2) === undefined, 'n+1st element is undefined');
	ok(p103([1], 0) === undefined, '0th element is undefined');
	ok(p103([1,2], 1) === 1, '1st element of a two element list is the first element');
	ok(p103([1,2], 2) === 2, '2nd element of a two element list is the second element');
	ok(p103([1,2,3], 2) === 2, '2nd element of a three element list is the middle element');
});

test('Lists 4', function(){
	ok(p104([]) === 0, 'empty list has size 0');
	ok(p104([1]) === 1, 'single element list has size 1');
	ok(p104([1,2,3]) === 3, 'three element list has size 3');
});

test('Lists 5', function(){
	ok(equals(p105([]), []), 'Reverse an empty list is an empty list');
	ok(equals(p105([1]), [1]), 'Reverse a single element list returns the same single element list');
	ok(equals(p105([1,2]), [2,1]), 'Reverse a two element list returns a list with the elements reversed');
	ok(equals(p105([1,2,3]), [3,2,1]), 'Reverse a three element list returns a list with the elements reversed');
});

test('Lists 6', function(){
	ok(p106([]), 'An empty list is a palindrome');
	ok(p106([1]), 'A single element list is a palindrome');
	ok(p106([1,1]), 'A two element list that has the same element repeated is a palindrome');
	ok(!p106([1,2]), '[1,2] is not a palindrome');
	ok(p106([1,2,1]), '[1,2,1] is a palindrome');
	ok(!p106([1,2,3]), '[1,2,3] is not a palindrome');
	ok(p106([1,2,3,2,1]), '[1,2,3,2,1] is a palindrome');
});

test('Lists 7', function(){
	ok(equals(p107([]), []), 'An empty list is already flattened');
	ok(equals(p107([1]), [1]), 'A single element list that is already flattened');
	ok(equals(p107([1,2,3]), [1,2,3]), 'A flattened list should be returned the same');
	ok(equals(p107([[1],[2]]), [1,2]), 'Flattening two single element lists');
	ok(equals(p107([[1,2,3],[4,5,6]]), [1,2,3,4,5,6]), 'Flattening two multi element lists');
	var l = (p107([[1,2],[[3,4],[5,6]]]));
	ok(equals(l, [1,2,3,4,5,6]), 'Flattening two levels deep');
});

test('Lists 8', function(){
	ok(equals(p108([]), []), 'An empty list is already compressed');
	ok(equals(p108([1,2,3]), [1,2,3]), 'A list that doesn\'t need to be compressed should be returned as is');
	ok(equals(p108([1,1,2,3]), [1,2,3]), '[1,1,2,3] should be compressed to [1,2,3]');
	ok(equals(p108([1,1,2,3,1]), [1,2,3,1]), '[1,1,2,3,1] should be compressed to [1,2,3,1]');
	ok(equals(p108([1,1,1,1,2,3,3,1,1,4,5,5,5,5]), [1,2,3,1,4,5]), '[1,1,1,1,1,2,3,3,1,1,4,5,5,5,5) should be compressed to [1,2,3,1,4,5]');
});
