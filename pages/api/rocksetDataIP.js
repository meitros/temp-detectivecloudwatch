// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import rockset from '@rockset/client';

export default (req, res) => {
  const ApiKey = process.env.ROCKSET_APIKEY;
  const rocksetClient = rockset(ApiKey);

  return rocksetClient.queryLambdas
    .executeQueryLambda('commons', 'getIPAddress', 'a6a37f26e5d6964a', null)
    .then((response) => {
      res.status(200).json(response.results);
    });
};
