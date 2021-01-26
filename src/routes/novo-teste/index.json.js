// if (typeof fetch !== 'function') {
//     global.fetch = require('node-fetch');
// }

const createTeste = (data) => {
    return fetch('/.netlify/functions/novo-teste', {
        body: JSON.stringify(data),
        method: 'POST'
    });
    // return data;
}

export async function post(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
    });
    const data = req.body;
    console.log(data);
    // res.end(JSON.stringify(data));
    YvhmScgfTdqY8fTARUFK 

}
