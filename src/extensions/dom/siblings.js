// Extensions.
(function( undefined ){
	shoestring.fn.siblings = function(){
		if( !this.length ) {
			return shoestring( [] );
		}

		var sibs = [],
			el = this[ 0 ].parentNode.firstChild;

		do {
			if( el.nodeType === 1 && el !== this[ 0 ] ) {
				sibs.push( el );
			}
		} while( el = el.nextSibling );

		return shoestring( sibs );
	};
}());