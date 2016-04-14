angular
	.module('app')
	.controller('BillController', BillController);

BillController.$inject = ['$scope', '$location', '$routeParams', 'BillService'];

function BillController($scope, $location, $routeParams, BillService){
	var vm = this;

	vm.create = create;
	vm.edit = edit;
	vm.del = del;
	vm.saveOrUpdate = saveOrUpdate;
	vm.exit = exit;
	vm.getBills = getBills;

	/////////////////////////

	function saveOrUpdate(){
		$routeParams.id ? vm.edit() : vm.create();
	}

	function create(){
		vm.bill.id = $scope.bills.length + 1;
		$scope.bills[$scope.bills.length]=vm.bill;
		vm.exit();
	}

	function edit(){
		vm.bill.id = $routeParams.id;
		$scope.bills[$routeParams.id-1]=vm.bill;
		vm.exit();
	}

	function del(id){
		$scope.bills.splice(id-1,1);
		vm.exit();
	}

	function exit(){
		$location.path('/');
	}

	function getBills() {
        return BillService.getBills()
            .then(function(data) {
                vm.bills = data;
                return vm.bills;
            });
    }
}