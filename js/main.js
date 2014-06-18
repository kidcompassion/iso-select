$(function() {

	var filters = []; //array to hold the selections
    var $container = $('#container'); //this holds the items in the DOM

	$('.filter-select').change(function(){
		var $this = $(this); //checks which select we're using
		var user_choice = $this.val(); //gets the value the user chose
		
		filters.push(user_choice); //adds each choice into the array
		
		var filterValue = filters.join(''); //strips out all the commas to make an isotope friendly class
		
		console.log(filterValue);
		   // set filter for Isotope
	   $container.isotope({ filter: filterValue });
		
		

		
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