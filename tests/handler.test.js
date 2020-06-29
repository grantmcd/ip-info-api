import * as handler from '../handler';

test('geoIp', async () => {
  const event = {
    pathParameters: {
      ipAddress: "75.34.225.8"
    }
  };

  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");

    const geoIpData = JSON.parse(response.body);
    expect(geoIpData.city.name.en).toEqual("Shawnee");
  };

  await handler.geoIp(event, context, callback);
});

test('whoisIp', async () => {
  const event = {
    pathParameters: {
      ipAddress: "75.34.225.8"
    }
  };

  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");

    const whoisData = JSON.parse(response.body);
    expect(whoisData.Organization).toEqual("AT&T Corp. (AC-3280)");
  };

  await handler.whoisIp(event, context, callback);
});
