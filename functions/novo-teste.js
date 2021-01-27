import faunadb from 'faunadb';
require('dotenv').config();
const axios = require('axios');

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
        // axios.post('https://api.netlify.com/build_hooks/6010cc80101bb469412ade5d')
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.error(error);
        // });
        console.log('Fazendo o build...');
        /* Success! return the response with statusCode 200 */
        // const json = response.json();
        // console.log(json);
        const responseObject = JSON.parse(JSON.stringify(response));
        console.dir(responseObject);
        const id = responseObject['ref']['@ref']['id'];
        console.log(id);
        return callback(null, {
            statusCode: 302,
            body: JSON.stringify(response),
            headers: {
                Location: `/teste/${id}`,
                'Access-Control-Allow-Origin': '*'
            }
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