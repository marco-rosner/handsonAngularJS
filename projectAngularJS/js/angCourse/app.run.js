angular
	.module('app')
	.run(run);

function run($rootScope){
	$rootScope.bills = [{
		id:1,
		description:"Bill 1",
		value:123
	},
	{
		id:2,
		description:"Bill 2",
		value:321
	},
	{
		id:3,
		description:"Bill 3",
		value:345
	},
	{
		id:4,
		description:"Bill 4",
		value:355
	}]
	console.log('Create $rootScope');
}