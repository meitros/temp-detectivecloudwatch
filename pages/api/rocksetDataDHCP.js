import rockset from '@rockset/client';

export default (req, res) => {
  const ApiKey = process.env.ROCKSET_APIKEY;
  const rocksetClient = rockset(ApiKey);

  return rocksetClient.queryLambdas
    .executeQueryLambda('commons', 'ExtractDateAndDHCP', '6429dfff90e3ad6e', null)
    .then((response) => {
      res.status(200).json(response.results);
    });
};
