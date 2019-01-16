$(document).ready(function(){
	
	$('a.btn').click(function(event){
		// Avoid adding # to the URL in the browsers address bar
		event.preventDefault();
	});

	// Spinner
	$('#activate-spinner').click(function(){
		$('#spinner-bg').toggleClass('active');
		setTimeout(function(){
			$('#spinner-bg').toggleClass('active');
		}, 5000);
	});
	
	//Progress bar
	$('#activate-progress-bar').click(function(){
		$('#progress-bg').toggleClass('active');
		var i = 0;
		var x = setInterval(function(){
			i = i + .5;
			$('#progress-bar').val(i);
			if (i > 110){
				clearInterval(x);
				$('#progress-bg').toggleClass('active');
			}
		}, 10);
	});
});