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

test('Lists 9', function(){
	ok(equals(p109([]), []), 'An empty list is already packed');
	ok(equals(p109([1]), [[1]]), '[1] -> [[1]]');
	ok(equals(p109([1,1]), [[1,1]]), '[1,1] -> [[1,1]]');
	ok(equals(p109([1,2]), [[1],[2]]), '[1,2] -> [[1],[2]]');
	ok(equals(p109([1,1,2,2,3,3]), [[1,1],[2,2],[3,3]]), '[1,1,2,2,3,3] -> [[1,1],[2,2],[3,3]]');
	ok(equals(p109([1,1,1,1,2,3,3,1,1,4,5,5,5,5]), [[1,1,1,1],[2],[3,3],[1,1],[4],[5,5,5,5]]), '[1,1,1,1,2,3,3,1,1,4,5,5,5,5] -> [[1,1,1,1],[2],[3,3],[1,1],[4],[5,5,5,5]]');
});

test('Lists 10', function(){
	ok(equals(p110([]), []), 'An empty list is already encoded');
	ok(equals(p110([1]), [[1,1]]), '[1] -> [[1,1]]');
	ok(equals(p110([1,1]), [[2,1]]), '[1,1] -> [[2,1]]');
	ok(equals(p110([1,2]), [[1,1],[1,2]]), '[1,2] -> [[1,1],[1,2]]');
	ok(equals(p110([1,1,2,2,3,3]), [[2,1],[2,2],[2,3]]), '[1,1,2,2,3,3] -> [[2,1],[2,2],[2,3]]');
	ok(equals(p110([1,1,1,1,2,3,3,1,1,4,5,5,5,5]), [[4,1],[1,2],[2,3],[2,1],[1,4],[4,5]]), '[1,1,1,1,2,3,3,1,1,4,5,5,5,5] -> [[4,1],[1,2],[2,3],[2,1],[1,4],[4,5]]');
});

test('Lists 11', function(){
	ok(equals(p111([]), []), 'An empty list is already encoded');
	ok(equals(p111([1]), [1]), '[1] -> [1]');
	ok(equals(p111([1,1]), [[2,1]]), '[1,1] -> [[2,1]]');
	ok(equals(p111([1,2]), [1,2]), '[1,2] -> [1,2]');
	ok(equals(p111([1,1,2,2,3,3]), [[2,1],[2,2],[2,3]]), '[1,1,2,2,3,3] -> [[2,1],[2,2],[2,3]]');
	ok(equals(p111([1,1,1,1,2,3,3,1,1,4,5,5,5,5]), [[4,1],2,[2,3],[2,1],4,[4,5]]), '[1,1,1,1,2,3,3,1,1,4,5,5,5,5] -> [[4,1],2,[2,3],[2,1],4,[4,5]]');
});

test('Lists 12', function(){
	ok(equals(p112([]), []), 'An empty list is already decoded');
	ok(equals(p112([1]), [1]), '[1] -> [1]');
	ok(equals(p112([[2,1]]), [1,1]), '[[2,1]] -> [1,1]');
	ok(equals(p112([1,2]), [1,2]), '[1,2] -> [1,2]');
	ok(equals(p112([[2,1],[2,2],[2,3]]), [1,1,2,2,3,3]), '[[2,1],[2,2],[2,3]] -> [1,1,2,2,3,3]');
	ok(equals(p112([[4,1],2,[2,3],[2,1],4,[4,5]]), [1,1,1,1,2,3,3,1,1,4,5,5,5,5]), '[[4,1],2,[2,3],[2,1],4,[4,5]] -> [1,1,1,1,2,3,3,1,1,4,5,5,5,5]');
});

test('Lists 13', function(){
	ok(equals(p113([]), []), 'An empty list is already encoded');
	ok(equals(p113([1]), [1]), '[1] -> [1]');
	ok(equals(p113([1,1]), [[2,1]]), '[1,1] -> [[2,1]]');
	ok(equals(p113([1,2]), [1,2]), '[1,2] -> [1,2]');
	ok(equals(p113([1,1,2,2,3,3]), [[2,1],[2,2],[2,3]]), '[1,1,2,2,3,3] -> [[2,1],[2,2],[2,3]]');
	ok(equals(p113([1,1,1,1,2,3,3,1,1,4,5,5,5,5]), [[4,1],2,[2,3],[2,1],4,[4,5]]), '[1,1,1,1,2,3,3,1,1,4,5,5,5,5] -> [[4,1],2,[2,3],[2,1],4,[4,5]]');
});

test('Lists 14', function(){
	ok(equals(p114([]), []), '[] -> []');
	ok(equals(p114([1]), [1,1]), '[1] -> [1,1]');
	ok(equals(p114([1,1]), [1,1,1,1]), '[1,1] -> [1,1,1,1]');
	ok(equals(p114([1,2]), [1,1,2,2]), '[1,2] -> [1,1,2,2]');
	ok(equals(p114([1,2,3,3,4]), [1,1,2,2,3,3,3,3,4,4]), '[1,2,3,3,4] -> [1,1,2,2,3,3,3,3,4,4]');
});

test('Lists 15', function(){
	ok(equals(p115([],2), []), '[],2 -> []');
	ok(equals(p115([],3), []), '[],3 -> []');
	ok(equals(p115([1],2), [1,1]), '[1],2 -> [1,1]');
	ok(equals(p115([1],3), [1,1,1]), '[1],3 -> [1,1,1]');
	ok(equals(p115([1],5), [1,1,1,1,1]), '[1],5 -> [1,1,1,1,1]');
	ok(equals(p115([1,2],2), [1,1,2,2]), '[1,2],2 -> [1,1,2,2]');
	ok(equals(p115([1,2],3), [1,1,1,2,2,2]), '[1,2],3 -> [1,1,1,2,2,2]');
	ok(equals(p115([1,2],5), [1,1,1,1,1,2,2,2,2,2]), '[1,2],5 -> [1,1,1,1,1,2,2,2,2,2]');
	ok(equals(p115([1,2,3],3), [1,1,1,2,2,2,3,3,3]), '[1,2,3],3 -> [1,1,1,2,2,2,3,3,3]');
});

test('Lists 16', function(){
	ok(equals(p116([],2), []), '[],2 -> []');
	ok(equals(p116([],3), []), '[],3 -> []');
	ok(equals(p116([1,2,3,4],2), [1,3]), '[1,2,3,4],2 -> [1,3]');
	ok(equals(p116([1,2,3,4],3), [1,2,4]), '[1,2,3,4],3 -> [1,2,4]');
	ok(equals(p116([1,2,3,4,5,6,7,8,9,10],3), [1,2,4,5,7,8,10]), '[1,2,3,4,5,6,7,8,9,10],3 -> [1,2,4,5,7,8,10]');
});

test('Lists 17', function(){
	var result = p117([],2);
	ok(equals(result.left, []), '[],2 -> []');
	ok(equals(result.right, []), '[],2 -> []');
	result = p117([1,2],1);
	ok(equals(result.left, [1]), '[1,2],1 -> [1]');
	ok(equals(result.right, [2]), '[1,2],1 -> [2]');
	result = p117([1,2,3,4,5,6,7,8,9,10],3);
	ok(equals(result.left, [1,2,3]), '[1,2,3,4,5,6,7,8,9,10],3 -> [1,2,3]');
	ok(equals(result.right, [4,5,6,7,8,9,10]), '[1,2,3,4,5,6,7,8,9,10],3 -> [4,5,6,7,8,9,10]');
});

test('Lists 18', function(){
	ok(equals(p118([],2,5), []), '[],2,5 -> []');
	ok(equals(p118([1,2],1,1), [1]), '[1,2],1,1 -> [1]');
	ok(equals(p118([1,2],2,2), [2]), '[1,2],2,2 -> [2]');
	ok(equals(p118([1,2],3,3), []), '[1,2],3,3 -> []');
	ok(equals(p118([1,2,3,4,5,6,7],3,7), [3,4,5,6,7]), '[1,2,3,4,5,6,7],3,7 -> [3,4,5,6,7]');
});

test('Lists 19', function(){
	ok(equals(p119([],3), []), '[],3 -> []');
	ok(equals(p119([1,2],3), [1,2]), '[1,2],3 -> [1,2]');
	ok(equals(p119([1,2,3,4,5,6,7,8],3), [4,5,6,7,8,1,2,3]), '[1,2,3,4,5,6,7,8],3 -> [4,5,6,7,8,1,2,3]');
});

test('Lists 20', function(){
	var result = p120([],2);
	ok(result.element === undefined, '[],2 -> undefined,[]');
	ok(equals(result.remainder, []), '[],2 -> undefined,[]');
	result = p120([1],1);
	ok(result.element === 1, '[1],1 -> 1,[]');
	ok(equals(result.remainder, []), '[1],1 -> 1,[]');
	result = p120([1,2,3],2);
	ok(result.element === 2, '[1,2,3],2 -> 2,[1,3]');
	ok(equals(result.remainder, [1,3]), '[1,2,3],2 -> 2,[1,3]');
	result = p120([1,2,3,4],2);
	ok(result.element === 2, '[1,2,3,4],2 -> 2,[1,3,4]');
	ok(equals(result.remainder, [1,3,4]), '[1,2,3,4],2 -> 2,[1,3,4]');
});

test('Lists 21', function(){
	ok(equals(p121([],2,1), [1]), '[],2,1 -> [1]');
	ok(equals(p121([1,2,3],2,4), [1,4,2,3]), '[1,2,3],2,4 -> [1,4,2,3]');
	ok(equals(p121([1,2,3,4],2,5), [1,5,2,3,4]), '[1,2,3,4],2,5 -> [1,5,2,3,4]');
});

test('Lists 22', function(){
	ok(equals(p122(1,1), [1]), '1,1 -> [1]');
	ok(equals(p122(1,2), [1,2]), '1,2 -> [1,2]');
	ok(equals(p122(4,9), [4,5,6,7,8,9]), '4,9 -> [4,5,6,7,8,9]');
});

test('Lists 23', function(){
	var result = p123([1],1);
	ok(equals(result, [1]), '[1],1 -> [1]');
	var input = [1,2,3];
	result = p123([1,2,3],3);
	ok(result.length == 3, '[1,2,3],3 -> list of length 3');
	ok(input.indexOf(result[0]) >= 0, 'result[0] exists in input');
	ok(input.indexOf(result[1]) >= 0, 'result[1] exists in input');
	ok(input.indexOf(result[2]) >= 0, 'result[2] exists in input');
	input = [1,2,3,4,5,6,7,8];
	result = p123([1,2,3,4,5,6,7,8],3);
	ok(result.length == 3, '[1,2,3,4,5,6,7,8],3 -> list of length 3');
	ok(input.indexOf(result[0]) >= 0, 'result[0] exists in input');
	ok(input.indexOf(result[1]) >= 0, 'result[1] exists in input');
	ok(input.indexOf(result[2]) >= 0, 'result[2] exists in input');
});

test('Lists 24', function(){
	var result = p124(1,1);
	ok(equals(result, [1]), '1,1 -> [1]');
	result = p124(1,10);
	ok([1,2,3,4,5,6,7,8,9,10].indexOf(result[0]) >= 0, '1,10 -> [1..10]');
	result = p124(10,10);
	for ( var i = 1; i <= 10; i++ ) {
		ok(result.indexOf(i) >= 0, 'result contains ' + i);
	}
	result = p124(6,49);
	for ( var i = 0; i < result.length; i++ ) {
		ok(result[i] > 0 && result[i] <= 49, 'Number is between 1 and 49');
		var index = result.indexOf(result[i]);
		var next_index = result.indexOf(result[i],index+1);
		ok(next_index === -1, 'Number occurs only once');
	}
});

test('Lists 25', function(){
	var result = p125([1]);
	ok(equals(result, [1]), '[1] -> [1]');
	result = p125([1,2,3]);
	ok(result.length === 3, '[1,2,3] -> list of length 3');
	for ( var i = 0; i < result.length; i++ ) {
		ok([1,2,3].indexOf(result[i]) >= 0, result[i] + ' exists in [1,2,3]');
	}
	result = p125([1,2,3,4,5,6]);
	ok(result.length === 6, '[1,2,3,4,5,6] -> list of length 6');
	for ( var i = 0; i < result.length; i++ ) {
		ok([1,2,3,4,5,6].indexOf(result[i]) >= 0, result[i] + ' exists in [1,2,3,4,5,6]');
	}

});

test('Lists 26', function(){
	var result = p126([1],1);
	ok(equals(result, [1]), '[1],1 -> [1]');
	result = p126([1,2,3],2);
	ok(equals(result, [[1,2],[1,3],[2,3]]), '[1,2,3],2 -> [[1,2],[1,3],[2,3]]');
	result = p126([1,2,3,4,5,6],3);
	ok(result.length === 20, '[1,2,3,4,5,6],3 -> result of length 20');
	ok(equals(result[0], [1,2,3]), '[1,2,3,4,5,6],3(0) -> [1,2,3]');
	ok(equals(result[1], [1,2,4]), '[1,2,3,4,5,6],3(1) -> [1,2,4]');
	ok(equals(result[2], [1,2,5]), '[1,2,3,4,5,6],3(2) -> [1,2,5]');
	ok(equals(result[17], [3,4,6]), '[1,2,3,4,5,6],3(17) -> [3,4,6]');
	ok(equals(result[18], [3,5,6]), '[1,2,3,4,5,6],3(18) -> [3,5,6]');
	ok(equals(result[19], [4,5,6]), '[1,2,3,4,5,6],3(19) -> [4,5,6]');
	
});

test('Lists 27', function(){
});

test('Lists 28 a', function(){
	ok(equals(p128a([[1]]), [[1]]), '[[1]] -> [[1]]');
	ok(equals(p128a([[2,3],[1]]), [[1],[2,3]]), '[[2,3],1] -> [[1],[2,3]]');
	ok(equals(p128a([[1,2,3],[4,5],[1,2,3],[4,5],[9,10,11,12],[4,5],[15]]), [[15],[4,5],[4,5],[4,5],[1,2,3],[1,2,3],[9,10,11,12]]), '[[1,2,3],[4,5],[1,2,3],[4,5],[9,10,11,12],[4,5],[15]] -> [[15],[4,5],[4,5],[4,5],[1,2,3],[1,2,3],[9,10,11,12]]');
	
});

test('Lists 28 b', function(){
	ok(equals(p128b([[1]]), [[1]]), '[[1]] -> [[1]]');
	ok(equals(p128b([[1],[1],[1,2]]), [[1,2],[1],[1]]), '[[1],[1],[1,2]] -> [[1,2],[1],[1]]');
	ok(equals(p128b([[1,2,3],[1,2],[1,2,3],[1,2],[1,2,3,4],[1,2],[1]]), [[1,2,3,4],[1],[1,2,3],[1,2,3],[1,2],[1,2],[1,2]]), '[[1,2,3],[1,2],[1,2,3],[1,2],[1,2,3,4],[1,2],[1]] -> [[1,2,3,4],[1],[1,2,3],[1,2,3],[1,2],[1,2],[1,2]]');
});

test('Arithmetic 1', function(){
	ok(is_prime(1), '1 is prime');
	ok(is_prime(2), '2 is prime');
	ok(is_prime(3), '3 is prime');
	ok(!is_prime(4), '4 is not prime');
	ok(is_prime(5), '5 is prime');
	ok(!is_prime(6), '6 is not prime');
	ok(is_prime(7), '7 is prime');
	ok(!is_prime(8), '8 is not prime');
	ok(!is_prime(9), '9 is not prime');
});

test('Arithmetic 2', function(){
	ok(equals(prime_factors(2), [2]), '2 -> [2]');
	ok(equals(prime_factors(9), [3,3]), '9 -> [3,3]');
	ok(equals(prime_factors(315), [3,3,5,7]), '315 -> [3,3,5,7]');
});

test('Arithmetic 3', function(){
	ok(equals(prime_factors_mult(2), [[1,2]]), '2 -> [[1,2]]');
	ok(equals(prime_factors_mult(9), [[2,3]]), '9 -> [[2,3]]');
	ok(equals(prime_factors_mult(315), [[2,3],[1,5],[1,7]]), '315 -> [[2,3],[1,5],[1,7]]');
});

test('Arithmetic 4', function(){
	ok(equals(prime_range(1,1), [1]), '1,1 -> [1]');
	ok(equals(prime_range(1,9), [1,2,3,5,7]), '1,9 -> [1,2,3,5,7]');
	ok(equals(prime_range(5,20), [5,7,11,13,17,19]), '5,20 -> [5,7,11,13,17,19]');
});

test('Arithmetic 5', function(){
	ok(equals(goldbach_list(4,4), [[2,2]]), '4,4 -> [[2,2]]');
	ok(equals(goldbach_list(3,8), [[2,2],[3,3],[3,5]]), '3,8 -> [[2,2],[3,3],[3,5]]');
	ok(equals(goldbach_list(9,20), [[3,7],[5,7],[3,11],[3,13],[5,13],[3,17]]), '9,20 -> [[3,7],[5,7],[3,11],[3,13],[5,13],[3,17]]');
});
