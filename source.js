function p101(l) {
	return l[l.length-1];
}

function p102(l) {
	return l[l.length-2];
}

function p103(l, k) {
	return l[k-1];
}

function p104(l) {
	return l.length;
}

function copy(l1) {
	var l2 = [];
	for ( var i = 0; i < l1.length; i++ ) {
		l2.push(l1[i]);
	}
	return l2;
}

function equals(l1, l2) {
	if ( l1.length === l2.length ) {
		for ( var i = 0; i < l1.length; i++ ) {
			if ( l1[i] instanceof Array && l2[i] instanceof Array ) {
				if ( !equals( l1[i], l2[i] ) ) {
					return false;
				}
			}
			else if ( l1[i] !== l2[i] ) {
				return false;
			}
		}
		return true;
	}
	return false;
	
}

function p105(l) {
	return l.reverse();
}

function p106(l) {
	return equals(copy(l), l.reverse());
}

function p107(l) {
	var result = [];
	for ( var i = 0; i < l.length; i++ ) {
		if ( l[i] instanceof Array ) {
			result = result.concat(p107(l[i]));
		} else {
			result.push(l[i]);
		}
	}
	return result;
}

function p108(l) {
	var result = [];
	var last_element;
	for ( var i = 0; i < l.length; i++ ) {
		if ( l[i] !== last_element ) {
			result.push(l[i]);
			last_element = l[i];
		}
	}
	return result;
	
}

function p109(l) {
	var result = [];
	var curr_array = [];
	for ( var i = 0; i < l.length; i++ ) {
		if ( curr_array.length != 0 && curr_array[0] !== l[i] ) {
			result.push( curr_array );
			curr_array = [];
		}
		curr_array.push( l[i] );
	}
	if ( curr_array.length !== 0 ) {
		result.push( curr_array );
	}
	return result;
}

function p110(l) {
	var result = [];
	var last_element;
	var last_count = 0;
	for ( var i = 0; i < l.length; i++ ) {
		if ( last_count !== 0 && last_element !== l[i] ) {
			result.push( [last_count, last_element] );
			last_count = 0;
		}
		last_element = l[i];
		last_count++;
	}
	if ( last_count !== 0 ) {
		result.push( [last_count, last_element] );
	}
	return result;
}

function p111(l) {
	var result = [];
	var pre = p110(l);
	for ( var i = 0; i < pre.length; i++ ) {
		if ( pre[i][0] === 1 ) {
			result.push( pre[i][1] );
		} else {
			result.push( pre[i] );
		}
	}
	return result;
}

function p112(l) {
	var result = [];
	for ( var i = 0; i < l.length; i++ ) {
		if ( l[i] instanceof Array ) {
			for ( var j = 0; j < l[i][0]; j++ ) {
				result.push( l[i][1] );
			}
		} else {
			result.push( l[i] );
		}
	}
	return result;
}

function p113(l) {
	var result = [];
	var last_element;
	var last_count = 0;
	for ( var i = 0; i < l.length; i++ ) {
		if ( last_count !== 0 && last_element !== l[i] ) {
			if ( last_count === 1 ) {
				result.push( last_element );
			} else {
				result.push( [last_count, last_element] );
			}
			last_count = 0;
		}
		last_element = l[i];
		last_count++;
	}
	if ( last_count === 1 ) {
		result.push( last_element );
	}
	else if ( last_count !== 0 ) {
		result.push( [last_count, last_element] );
	}
	return result;
}

function p114(l) {
	var result = [];
	for ( var i = 0; i < l.length; i++ ) {
		result.push( l[i] );
		result.push( l[i] );
	}
	return result;
}

function p115(l,k) {
	var result = [];
	for ( var i = 0; i < l.length; i++ ) {
		for ( var j = 0; j < k; j++ ) {
			result.push( l[i] );
		}
	}
	return result;
}

function p116(l,k) {
	var result = [];
	for ( var i = 0; i < l.length; i++ ) {
		if ( (i+1) % k !== 0 ) {
			result.push( l[i] );
		}
	}
	return result;
}

function p117(l,k) {
	var result = {};
	result.left = l.slice(0,k);
	result.right = l.slice(k);
	return result;
}

function p118(l,i,j) {
	return l.slice(i-1,j);
}

function p119(l,k) {
	var p117_result = p117(l,k);
	var result = p117_result.right;
	result = result.concat( p117_result.left );
	return result;
}

function p120(l,k) {
	var element = l.splice(k-1,1);
	var result = { element: element[0], remainder: l };
	return result;
}

function p121(l,k,e) {
	l.splice(k-1,0,e);
	return l;
}

function p122(i,j) {
	var result = [];
	for ( var k = i; k <= j; k++ ) {
		result.push( k );
	}
	return result;
}

function p123(l,k) {
	var result = [];
	for ( var i = 0; i < k; i++ ) {
		var rnd = Math.floor(Math.random() * l.length);
		result.push( l[rnd] );
		var p120_result = p120(l, rnd+1);
		l = p120_result.remainder;
	}
	return result;
}

function p124(j,k) {
	var range = p122(1,k);
	var result = [];
	for ( var i = 0; i < j; i++ ) {
		var element = p123(range,1)[0];
		while ( result.indexOf( element ) >= 0 ) {
			element = p123(range,1)[0];
		}
		result.push(element);
	}
	return result;
}

function p125(l) {
	return p123(l,l.length);
}

function p126(l,k) {
	var result = [];
	if ( k == 1 ) {
		return l;
	} else {
		for ( var i = 0; i < l.length; i++ ) {
			var new_l = l.slice(i+1);
			var k_l = p126(new_l,k-1);
			if ( k_l.length > 0 ) {
				for ( var j = 0; j < k_l.length; j++ ) {
					var to_add = [l[i]].concat( k_l[j] );
					result.push( to_add );
				}
			}
		}
	}
	return result;
}

function p127(){
}

function p128a(l){
	function compare(a,b){
		return a.length > b.length;
	}
	return l.sort(compare);
}

function p128b(l){
	var frequencies = {};
	for ( var i = 0; i < l.length; i++ ) {
		var length = l[i].length;
		if ( frequencies[length] ) {
			frequencies[length] = frequencies[length] + 1;
		} else {
			frequencies[length] = 1;
		}
	}
	function compare(a,b) {
		return frequencies[a.length] > frequencies[b.length];
	}
	return l.sort(compare);
}

function is_prime(n){
	for ( var i = 2; i < n; i++ ) {
		if ( n % i === 0 ) {
			return false;
		}
	}
	return true;
}

function prime_factors(n) {
	var result = [];
	while ( n > 1 ) {
		var i = 2;
		while ( true ) {
			if ( is_prime(i) ) {
				if ( n % i === 0 ) {
					result.push(i);
					n = n / i;
					break;
				} 
			}
			i++; 
		}
	}
	return result;
}

function prime_factors_mult(n) {
	return p110(prime_factors(n));
}

function prime_range(m,n) {
	var result = [];
	for ( var i = m; i <= n; i++ ) {
		if ( is_prime(i) ) {
			result.push(i);
		}
	}
	return result;
}

function goldbach(n) {
	if ( n % 2 === 0 ) {
		for ( var i = 2; i < n; i++ ) {
			if ( is_prime(i) && is_prime(n-i) ) {
				return [i,n-i];
				
			}
		}
	}
	return undefined;
}

function goldbach_list(m,n) {
	var result = [];
	for ( var i = m; i <= n; i++ ) {
		if ( i % 2 === 0 ) {
			result.push( goldbach(i) );
		}
	}
	return result;
}
