// // import fs from 'fs';
// // import path from 'path';
// // import grayMatter from 'gray-matter';
// if (typeof fetch !== 'function') {
//     global.fetch = require('node-fetch');
// }
const axios = require('axios');

const getAllTestes = () => {
    return axios.get(`/.netlify/functions/todos-testes`)
    .then(r => r.json())
    .then(testes => {
        console.log(testes);
        if (testes && testes.length > 0) {
            testes = testes.map(teste => {
                const id = teste['ref']['@ref']['id'];
                const name = teste.data.name;
                const slug = teste.data.slug;
                const html = teste.data.html;
                return {
                    id: id, 
                    name: name,
                    slug: slug,
                    html: html
                };
            });
        }
        return testes;
    })
    .catch(error => {
        return error;
    });
	// return fetch('/.netlify/functions/todos-testes', {
    //     method: 'GET'
    // })
    // .then(response => {
    //     return response.json();
    // })
    // .catch(error => {
    //     return error.json();
    // });
}

export async function get(_, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
    const testes = await getAllTestes();
    // const testes = [{ id: 'sdlkfjsfoijsfslj', name: 'Leo', slug: 'leo', html: 'Leo Barna' }];
	res.end(JSON.stringify(testes));
}
