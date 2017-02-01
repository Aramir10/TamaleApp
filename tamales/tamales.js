// alert("No le aflojes wey")


function OrderFormController($scope){

	$scope.services = [
		{
			name: 'Pork Tamales x 12',
			price: 16,
			active:true
		},{
			name: 'Bean and Chesse x 12',
			price: 12,
			active:false
		},{
			name: 'Chiken Tamales x 12',
			price: 14,
			active:false
		},
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	$scope.total = function(){

	var total = 0;


	angular.forEach($scope.services, function(s){
		if (s.active){
			total+= s.price;
		}
	});

	return total + (total * 0.08);
};
}
