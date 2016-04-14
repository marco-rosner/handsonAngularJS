angular
	.module('app')
	.service('BillService', BillService);

BillService.$inject = ['$http'];

function BillService($http){
	var urlBase = '/api/bill';

	var service = {
		getBills: getBills,
		getBill: getBill,
		insert: insert,
		update: update,
		del: del
	};

	return service;

	////////////////////////////////

	function getBills() {
		return $http.get(urlBase);
	}

	function getBill(id) {
		return $http.get(urlBase + '/' + id);
	}

	function insert(bill) {
		return $http.post(urlBase, bill);
	}

	function update(bill){
		return $http.put(urlBase + '/' + bill.id, bill);
	}

	function del(id){
		return $http.delete(urlBase + '/' + id);
	}
}