import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
});

exports.handler = (event, context, callback) => {
    console.log("Função `todos-testes` chamada");
    return client.query(q.Paginate(q.Match(q.Ref("indexes/all_testes"))))
    .then((response) => {
        const testeRefs = response.data;
        console.log("Testes refs", testeRefs);
        console.log(`${testeRefs.length} testes achados`);
        // create new query out of todo refs. http://bit.ly/2LG3MLg
        const getAllTestesDataQuery = testeRefs.map((ref) => {
            return q.Get(ref);
        });
        // then query the refs
        return client.query(getAllTestesDataQuery).then((ret) => {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(ret)
            });
        });
    }).catch((error) => {
        console.log("error", error);
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify(error)
        });
    })
};