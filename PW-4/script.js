fetch("https://secret-ocean-49799.herokuapp.com/https://github.com/Rob--W/cors-anywhere/issues/103")
	.then( res => res.text() )
	.then( data => 
		document.querySelector("#showData").innerHTML = data 
	)