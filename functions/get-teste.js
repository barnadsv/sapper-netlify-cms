import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
});

exports.handler = (event, context, callback) => {
    console.log("Função `get-teste` chamada");
    const id = event.queryStringParameters.slug;
    return client.query(q.Get(q.Ref(q.Collection('testes'), id)))
    .then((ret) => {
        return callback(null, {
            statusCode: 200,
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