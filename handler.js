export const hello = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // (* or a specific host)
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!' }))}`
    })
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);

export const geoIp = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // (* or a specific host)
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      message: `Go GeoIp Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!' }))}`
    })
  };
};

export const whoIs = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // (* or a specific host)
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      message: `Go WhoIs Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!' }))}`
    })
  };
};
