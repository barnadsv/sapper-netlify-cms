const createTeste = (data) => {
    return fetch('/.netlify/functions/novo-teste', {
        body: JSON.stringify(data),
        method: 'POST'
    });
}

export function post(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
    });
    const data = req.body;
	const novoTeste = createTeste(data);
	res.end(JSON.stringify(novoTeste));
}