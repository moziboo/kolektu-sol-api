const corsHandler = require('./utils/corsHandler');

exports.main = async function (event) {
  return {
    statusCode: 200,
    headers: corsHandler(event.headers.origin),
    body: JSON.stringify({
      message: "What would you like to know about the poorchain?",
    }),
  };
};
