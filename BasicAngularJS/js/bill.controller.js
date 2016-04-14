angular
	.module('myApp')
	.controller('BillController', BillController);

function BillController(){
	var vm = this;

	vm.Bills = [{
		description:"Bill 1",
		value:123
	},
	{
		description:"Bill 2",
		value:321
	},
	{
		description:"Bill 3",
		value:432
	}];
}