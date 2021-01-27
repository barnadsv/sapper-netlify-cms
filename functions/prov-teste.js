const faunadb = require('faunadb');
const pageTemplate = require('./teste-template.js');
// const languageStrings = require('../site/_data/strings.json');

require('dotenv').config();

// setup and auth the Fauna DB client
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_TESTES_SECRET
});

exports.handler = (event, context, callback) => {

  // get the lolly ID from the request
  const id = event.queryStringParameters.id.replace("/", "");

  // localize some strings
//   const lang = event.queryStringParameters.lang;

  // find the lolly data in the DB
//   client.query(q.Get(q.Match(q.Index("lolly_by_path"), path)))
  client.query(q.Get(q.Ref(q.Collection('testes'), id)))
  .then((response) => {
    // const templateData = Object.assign(response.data, {'localize': languageStrings[lang] })
    const templateData = response.data;
    // if found return a view
    return callback(null, {
      statusCode: 200,
      body: pageTemplate(templateData)
    });
  }).catch((error) => {
    // not found or an error, send to the generic error page
    console.log('Error:', error);
    return callback(null, {
      body: JSON.stringify(error),
      statusCode: 301,
      headers: {
        Location: `/not-found/index.html`,
      }
    });
  });

}