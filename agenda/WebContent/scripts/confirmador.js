/**
 * Confirmação de exclusão de um contato
 * 
 * @param idcon
 */

function confirmar(idcon) {
	let resposta = confirm("Tem certeza que deseja excluir deste contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}

}
