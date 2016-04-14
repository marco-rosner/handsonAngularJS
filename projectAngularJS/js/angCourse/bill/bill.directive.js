angular
	.module('app')
	.directive('angBill', angBill);

/* Directive for example
 *
 * Usage: <ang-bill descricao="bill 1" valor="123"></ang-bill>
 */
function angBill(){
	return {
		restrict: 'E',
		scope:{
			descricao : '@',
			valor : '@'
		},
		template: "Descrição: {{descricao}} - {{valor}} <br/>"
	};
}

//Case restrict is 'E': <ang-bill></ang-bill>
//Case restrict is 'C': <p class="angBill"></p>
//Case restrict is 'A': <h1 angbill="descricao">

