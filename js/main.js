$(function() {

	var filters = []; //array to hold the selections
    var $container = $('#container'); //this holds the items in the DOM

	$('.filter-select').change(function(){
		var $this = $(this); //checks which select we're using
		var user_choice = $this.val(); //gets the value the user chose
	
		var category = $this.attr('data-filter-group');
		
		
		filters[category] = user_choice; //creates associative array, where group name is key and selection is value
		
		
		console.log(filters);
		
		console.log(filters.destinations); //gets value of destination array
		
		console.log(filters.departures); //gets value of departures from the array
		
		if (filters.destinations == '*'){
			filters['destinations'] = '';
		}
		
		if (filters.departures =='*'){
			filters['departure'] == '';
		}
	
		
		
		var filterResults=[ filters.destinations, filters.departures];
		
		
		//filters.push(user_choice); //adds each choice into the array
		
		//alert(filters.length);
		
		var filterValue = filterResults.join(''); //strips out all the commas to make an isotope friendly class
		
		console.log(filterValue);
		   // set filter for Isotope
	   $container.isotope({ filter: filterValue });
		
	   //var generated_array = ['departures','destinations','date', 'duration' ]

	});
	

	
    var $container = $('#container').isotope({
       itemSelector: '.item',
       layoutMode: 'fitRows',
       getSortData: {
         price: '.price parseInt',
       	 rating: '.rating parseInt',
	   }
     });
	
	
	
	
    // bind sort button click
     $('#sorts').change(function() {

		 
       var sortValue = $(this).val();
	   //alert(sortValue);
       $container.isotope({ sortBy: sortValue });
     });

	

});

/* on select, get the filter value of the chosen select. 
give all selects a class of 'select'. get the value of this chosen sleect*/