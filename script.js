function enviarWhats(event) {
		event.preventDefault(); // Impede o envio do formulário padrão

		const nome = document.getElementById('nome').value;
		const mensagem = document.getElementById('mensagem').value;
		const telefone = '5519993505412';

		const texto = `Olá! Meu nome é ${nome}, ${mensagem}`;
		const msgFormatada = encodeURIComponent(texto);

		const url = `https://wa.me/${telefone}?text=${msgFormatada}`

		console.log(url); // Exibe a URL formatada no console para depuração

		window.open(url, '_blank');
	}