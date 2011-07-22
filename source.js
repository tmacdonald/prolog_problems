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
			if ( l1[i] !== l2[i] ) {
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
