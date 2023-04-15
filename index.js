const { yahooFinance } = require('./services/yahoo.finance.api');


module.exports.handler = async (event) => {
  let symbol = null;
  const headers = {
    'Access-Control-Allow-Origin': '*'
  };

  try {
    symbol = event['queryStringParameters'].symbol;
  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: "Bad request [symbol]" }),
    };
  }

  const prices = await yahooFinance(symbol).then(response => response.data);
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(prices.chart.result[0])
  }
}
