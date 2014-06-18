$(function() {


	var filters = []; //array to hold the selections
    var $container = $('#container'); //this holds the items in the DOM

	$('.filter-select').change(function(){
		var $this = $(this);
		var user_choice = $this.val();
		
		filters.push(user_choice);
		
		console.log(filters);
		   // set filter for Isotope
	//	   $container.isotope({ filter: filterValue });
		
		

		
	});
	

	

});

/* on select, get the filter value of the chosen select. 
give all selects a class of 'select'. get the value of this chosen sleect*/