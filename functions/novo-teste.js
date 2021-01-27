import faunadb from 'faunadb';
require('dotenv').config();

const q = faunadb.query;
console.log(process.env.FAUNADB_TESTES_SECRET);
const client = new faunadb.Client({
    secret: process.env.FAUNADB_TESTES_SECRET
});

exports.handler = (event, context, callback) => {
    /* parse the string body into a useable JS object */
    const data = JSON.parse(event.body);
    console.log("Função `novo-teste` chamada", data);
    const testeItem = {
        data: data
    };
    /* construct the fauna query */
    return client.query(q.Create(q.Ref("classes/testes"), testeItem))
    .then((response) => {
        console.log("success", response);
        /* Success! return the response with statusCode 200 */
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(response)
        });
    }).catch((error) => {
        console.log("error", error);
        /* Error! return the error with statusCode 400 */
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify(error)
        });
    });
}