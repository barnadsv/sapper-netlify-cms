import faunadb from 'faunadb';
require('dotenv').config();

const q = faunadb.query;
console.log(process.env.FAUNADB_TESTES_SECRET);
const client = new faunadb.Client({
    secret: process.env.FAUNADB_TESTES_SECRET
});

exports.handler = (event, context, callback) => {
    console.log("Função `todos-testes` chamada");
    return client.query(q.Paginate(q.Match(q.Ref("indexes/all_testes"))))
    .then((response) => {
        const testeRefs = response.data;
        console.log("Testes refs", testeRefs);
        console.log(`${testeRefs.length} testes achados`);
        // cria nova consulta a partir de refs. http://bit.ly/2LG3MLg
        const getAllTestesDataQuery = testeRefs.map((ref) => {
            return q.Get(ref);
        });
        // then query the refs
        return client.query(getAllTestesDataQuery)
        .then((ret) => {
            return callback(null, {
                statusCode: 200,
                headers: {
                    /* Required for CORS support to work */
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(ret)
            });
        })
        .catch((error) => {
            console.log("error", error);
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error)
            });
        })
    }).catch((error) => {
        console.log("error", error);
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify(error)
        });
    })
};