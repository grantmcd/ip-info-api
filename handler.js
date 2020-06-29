const CorsHeaders = {
  "Access-Control-Allow-Origin": "*", // (* or a specific host)
  "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
};

export const geoIp = async (event, context) => {
  const maxmind = require('maxmind');
  const lookup = await maxmind.open('./data/GeoLite2-City.mmdb');

  const geoIpInfo = lookup.get(event.pathParameters.ipAddress);

  return {
    statusCode: 200,
    headers: CorsHeaders,
    body: JSON.stringify(geoIpInfo)
  };
};

export const whoisIp = async (event, context) => {
  const whoiser = require('whoiser');

  let whoisInfo = await whoiser(event.pathParameters.ipAddress);

  return {
    statusCode: 200,
    headers: CorsHeaders,
    body: JSON.stringify(whoisInfo)
  };
};
