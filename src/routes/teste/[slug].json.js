import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';



const getTeste = (slug) => {
	// return fs.readFileSync(
	// 	path.resolve('static/testes/', `${fileName}.md`),
	// 	'utf-8'
    // );
    return fetch('/.netlify/functions/get-teste', {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error.json();
    });
};

export function get(req, res, _) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	const teste = getTeste(slug);
	const renderer = new marked.Renderer();

	const { data, content } = grayMatter(teste);
	const html = marked(content, { renderer });

	if (html) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({ html, ...data }));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
