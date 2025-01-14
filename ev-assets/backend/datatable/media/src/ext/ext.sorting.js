
$.extend( DataTable.ext.oSort, {
	/*
	 * text sorting
	 */
	"string-pre": function ( a )
	{
		if ( typeof a != 'string' ) { a = ''; }
		return a.toLocaleLowerCase();
	},

	"string-asc": function ( x, y )
	{
		return x.localeCompare(y);
	},
	
	"string-desc": function ( x, y )
	{
		return y.localeCompare(x);
	},
	
	
	/*
	 * html sorting (ignore html tags)
	 */
	"html-pre": function ( a )
	{
		return a.replace( /<.*?>/g, "" ).toLocaleLowerCase();
	},
	
	"html-asc": function ( x, y )
	{
		return x.localeCompare(y);
	},
	
	"html-desc": function ( x, y )
	{
		return y.localeCompare(x);
	},
	
	
	/*
	 * date sorting
	 */
	"date-pre": function ( a )
	{
		var x = Date.parse( a );
		
		if ( isNaN(x) || x==="" )
		{
			x = Date.parse( "01/01/1970 00:00:00" );
		}
		return x;
	},

	"date-asc": function ( x, y )
	{
		return x - y;
	},
	
	"date-desc": function ( x, y )
	{
		return y - x;
	},
	
	
	/*
	 * numerical sorting
	 */
	"numeric-pre": function ( a )
	{
		return (a=="-" || a==="") ? 0 : a*1;
	},

	"numeric-asc": function ( x, y )
	{
		return x - y;
	},
	
	"numeric-desc": function ( x, y )
	{
		return y - x;
	}
} );
