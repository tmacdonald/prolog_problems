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
	console.log(result);
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
