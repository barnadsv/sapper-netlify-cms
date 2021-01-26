// import fs from 'fs';
// import path from 'path';
// import grayMatter from 'gray-matter';
if (typeof fetch !== 'function') {
    global.fetch = require('node-fetch');
}

const getAllTestes = () => {
	// try {
	// 	return fs.readdirSync('static/testes/').map(fileName => {
	// 		const teste = fs.readFileSync(
	// 			path.resolve('static/testes', fileName),
	// 			'utf-8'
	// 		);
	// 		return grayMatter(teste).data;
	// 	});
	// } catch (e) {
	// 	return [];
    // }
    return fetch('/.netlify/functions/todos-testes', {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error.json();
    });
}

export function get(_, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	const testes = getAllTestes();
	res.end(JSON.stringify(testes));
}
