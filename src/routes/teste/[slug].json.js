// import path from 'path';
// import fs from 'fs';
// import grayMatter from 'gray-matter';
// import marked from 'marked';
const fetch = require('node-fetch');
import { configure, create } from '@beyonk/sapper-httpclient';

configure({ baseUrl: 'http://localhost:3000/.netlify/functions' });

const api = create();

const getTeste = async (p_slug) => {
    try {
        let ret = await api
        .transport(fetch)
        .endpoint(`/get-teste?slug=${p_slug}`)
        .get();
        const id = ret['ref']['@ref']['id'];
        const name = ret['data']['name'];
        const slug = ret['data']['slug'];
        const html = ret['data']['html'];
        const teste = {
            id: id, 
            name: name,
            slug: slug,
            html: html
        };
        return teste;
    } catch (error) {
        return error;
    }
}

export async function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
    });
    const { slug } = req.params;
    const teste = await getTeste(slug);
    // const testes = [{ id: 'sdlkfjsfoijsfslj', name: 'Leo', slug: 'leo', html: 'Leo Barna' }];
	res.end(JSON.stringify(teste));
}

// const getTeste = (slug) => {
// 	// return fs.readFileSync(
// 	// 	path.resolve('static/testes/', `${fileName}.md`),
// 	// 	'utf-8'
//     // );
//     return fetch('/.netlify/functions/get-teste', {
//         method: 'GET'
//     })
//     .then(response => {
//         return response.json();
//     })
//     .catch(error => {
//         return error.json();
//     });
// };

// export function get(req, res, _) {
// 	// the `slug` parameter is available because
// 	// this file is called [slug].json.js
// 	const { slug } = req.params;

// 	const teste = getTeste(slug);
// 	const renderer = new marked.Renderer();

// 	const { data, content } = grayMatter(teste);
// 	const html = marked(content, { renderer });

// 	if (html) {
// 		res.writeHead(200, {
// 			'Content-Type': 'application/json'
// 		});

// 		res.end(JSON.stringify({ html, ...data }));
// 	} else {
// 		res.writeHead(404, {
// 			'Content-Type': 'application/json'
// 		});

// 		res.end(JSON.stringify({
// 			message: `Not found`
// 		}));
// 	}
// }
