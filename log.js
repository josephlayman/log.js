window.log = function(data){
	if(typeof(console) !== 'undefined' && console !== null){
		console.log(data);
	}
}