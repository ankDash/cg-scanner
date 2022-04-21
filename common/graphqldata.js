const { GraphQLClient } = require('graphql-request');

const TOKEN = process.env.TOKEN;
const GIT_URL = process.env.GIT_URL || 'https://api.github.com/graphql';

module.exports.graphqldata = () => {
  const headers = { Authorization: `bearer ${TOKEN}` };
  return new GraphQLClient(GIT_URL, { headers });
}
