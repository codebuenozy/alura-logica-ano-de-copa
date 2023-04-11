	function exibirAnosDeCopa() {
		const limiteInput = document.getElementById("limite");
		const limite = parseInt(limiteInput.value);

		let anoCopa = 1930;
		let anos = [];

		while (anoCopa <= limite) {
		  anos.push(anoCopa);
		  anoCopa += 4;
		}

		const tabelaAnos = document.getElementById("tabela-anos");

		// Limpa a tabela antes de adicionar os novos dados
		tabelaAnos.innerHTML = "";

		// Cria a linha do cabeçalho
		const cabecalho = tabelaAnos.createTHead().insertRow();
		cabecalho.insertCell().textContent = "Ano";
		cabecalho.insertCell().textContent = "Sede";
		cabecalho.insertCell().textContent = "Vencedor";

		// Adiciona as linhas com os anos de Copa
		const corpo = tabelaAnos.createTBody();
		anos.forEach((ano) => {
		  const linha = corpo.insertRow();
		  linha.insertCell().textContent = ano;
		  linha.insertCell().textContent = getSedeDaCopa(ano);
		  linha.insertCell().textContent = getVencedorDaCopa(ano);
		});
	}

	function getSedeDaCopa(ano) {
	  const sedes = {
		1930: "Uruguai",
		1934: "Itália",
		1938: "França",
		1942: "Cancelado",
		1946: "Cancelado",
		1950: "Brasil",
		1954: "Suíça",
		1958: "Suécia",
		1962: "Chile",
		1966: "Inglaterra",
		1970: "México",
		1974: "Alemanha Ocidental",
		1978: "Argentina",
		1982: "Espanha",
		1986: "México",
		1990: "Itália",
		1994: "Estados Unidos",
		1998: "França",
		2002: "Coreia do Sul e Japão",
		2006: "Alemanha",
		2010: "África do Sul",
		2014: "Brasil",
		2018: "Rússia",
		2022: "Catar",
		2026: "Canadá, Estados Unidos e México", 
	  };
		return sedes[ano] || "Desconhecido";
	}
		  
	function getVencedorDaCopa(ano) {
	  const vencedores = {
		1930: "Uruguai",
		1934: "Itália",
		1938: "Itália",
		1942: "Cancelado",
		1946: "Cancelado",
		1950: "Uruguai",
		1954: "Alemanha Ocidental",
		1958: "Brasil",
		1962: "Brasil",
		1966: "Inglaterra",
		1970: "Brasil",
		1974: "Alemanha Ocidental",
		1978: "Argentina",
		1982: "Itália",
		1986: "Argentina",
		1990: "Alemanha Ocidental",
		1994: "Brasil",
		1998: "França",
		2002: "Brasil",
		2006: "Itália",
		2010: "Espanha",
		2014: "Alemanha",
		2018: "França",
		2022: "Argentina", 
	  };
		return vencedores[ano] || "Desconhecido";
	}