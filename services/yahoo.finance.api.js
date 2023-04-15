const axios = require('axios');

/**
 * 
 * @param {string} symbol 
 * @returns Promise
 */
module.exports.yahooFinance = (symbol) => {
  const uri = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=1mo`;
  const data = null;
  const headers = {
    'Content-Type': 'application/json'
  };

  return axios.get(uri, data, headers);
}




