import faunadb from 'faunadb';
require('dotenv').config();

const q = faunadb.query;
console.log(process.env.FAUNADB_TESTES_SECRET);
const client = new faunadb.Client({
    secret: process.env.FAUNADB_TESTES_SECRET
});

exports.handler = (event, context, callback) => {
    console.log("Função `get-teste` chamada");
    const id = event.queryStringParameters.slug;
    return client.query(q.Get(q.Ref(q.Collection('testes'), id)))
    .then((ret) => {
        return callback(null, {
            statusCode: 200,
            headers: {
                /* Required for CORS support to work */
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(ret)
        });
    }).catch((error) => {
        console.log("error", error);
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify(error)
        });
    })
};