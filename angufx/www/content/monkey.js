function MonkeyCtrl($scope) {
	
	$scope.images=[
		
		{ image:"content/images/monkey.jpg" , kotar:"content/images/Button1.png"  , teur:"The Brown Monkey"} ,
		{ image:"content/images/monkey2.jpeg" ,kotar:"content/images/Button2.png" , teur:"The Black Monkey"} ,
		{ image:"content/images/monkey3.jpeg" ,kotar:"content/images/Button3.png" , teur:"The Monkey in shock"} ,
		{ image:"content/images/monkey4.jpeg" , kotar:"content/images/Button4.png", teur:"The Shinpanza Monkey"} ,
	];
	$scope.curImage = $scope.images[0];
	$scope.SetCurImage = function(image) {
		$scope.curImage = image ;
	}
			
}	