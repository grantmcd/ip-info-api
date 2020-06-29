# ip-info-api

This project was built with the serverless framework. It currently deploys the functions to AWS Lambda. 

The corresponding react UI for this project can be seen [here](https://github.com/grantmcd/ip-info-ui).

## geoIp

Returns JSON with various pieces of data about the IP address from the maxmind geolite DB.

```
GET /geo-ip/{ipAddress}
```
Example Response:

```JSON
{
    "city": {
        "geoname_id": 4279247,
        "names": {
            "en": "Shawnee",
            "ru": "Шони"
        }
    },
    "continent": {
        "code": "NA",
        "geoname_id": 6255149,
        "names": {
            "de": "Nordamerika",
            "en": "North America",
            "es": "Norteamérica",
            "fr": "Amérique du Nord",
            "ja": "北アメリカ",
            "pt-BR": "América do Norte",
            "ru": "Северная Америка",
            "zh-CN": "北美洲"
        }
    },
    "country": {
        "geoname_id": 6252001,
        "iso_code": "US",
        "names": {
            "de": "USA",
            "en": "United States",
            "es": "Estados Unidos",
            "fr": "États-Unis",
            "ja": "アメリカ合衆国",
            "pt-BR": "Estados Unidos",
            "ru": "США",
            "zh-CN": "美国"
        }
    },
    "location": {
        "accuracy_radius": 20,
        "latitude": 39.0452,
        "longitude": -94.7189,
        "metro_code": 616,
        "time_zone": "America/Chicago"
    },
    "postal": {
        "code": "66226"
    },
    "registered_country": {
        "geoname_id": 6252001,
        "iso_code": "US",
        "names": {
            "de": "USA",
            "en": "United States",
            "es": "Estados Unidos",
            "fr": "États-Unis",
            "ja": "アメリカ合衆国",
            "pt-BR": "Estados Unidos",
            "ru": "США",
            "zh-CN": "美国"
        }
    },
    "subdivisions": [
        {
            "geoname_id": 4273857,
            "iso_code": "KS",
            "names": {
                "en": "Kansas",
                "es": "Kansas",
                "fr": "Kansas",
                "ja": "カンザス州",
                "pt-BR": "Cansas",
                "ru": "Канзас"
            }
        }
    ]
}
```

## whoisIp

Returns JSON with various pieces of data about the IP address from a whois lookup. Uses [whoiser](https://github.com/LayeredStudio/whoiser) for api requests.

```
GET /whois-ip/{ipAddress}
```

Example Response
```JSON
{
    "range": "75.23.0.0 - 75.45.127.255",
    "route": "75.44.0.0/16, 75.24.0.0/13, 75.32.0.0/13, 75.23.0.0/16, 75.45.0.0/17, 75.40.0.0/14",
    "NetName": "SBCIS-SBIS-6BLK",
    "NetHandle": "NET-75-23-0-0-1",
    "Parent": "NET75 (NET-75-0-0-0-0)",
    "NetType": "Direct Allocation",
    "asn": "",
    "Organization": "AT&T Corp. (AC-3280)",
    "RegDate": "2006-02-28",
    "Updated": "2018-07-19",
    "Ref": "https://rdap.arin.net/registry/ip/75.23.0.0",
    "organisation": {
        "OrgName": "AT&T Corp.",
        "OrgId": "AC-3280",
        "Address": "16331 NE 72nd Way\nAttn: IP Management",
        "City": "Redmond",
        "StateProv": "WA",
        "PostalCode": "98052",
        "Country": "US",
        "RegDate": "2018-03-05",
        "Updated": "2020-02-11",
        "Comment": "For policy abuse issues contact abuse@att.net\nFor all subpoena, Internet, court order related matters and emergency requests contact\n11760 US Highway 1\nNorth Palm Beach, FL 33408\nMain Number: 800-635-6840\nFax: 888-938-4715",
        "Ref": "https://rdap.arin.net/registry/entity/AC-3280"
    },
    "contactAbuse": {
        "OrgAbuseHandle": "ABUSE7-ARIN",
        "OrgAbuseName": "abuse",
        "OrgAbusePhone": "+1-919-319-8167",
        "OrgAbuseEmail": "abuse@att.net",
        "OrgAbuseRef": "https://rdap.arin.net/registry/entity/ABUSE7-ARIN"
    },
    "contactTechnical": {
        "OrgTechHandle": "ZS44-ARIN",
        "OrgTechName": "IPAdmin-ATT Internet Services",
        "OrgTechPhone": "+1-888-510-5545",
        "OrgTechEmail": "ipadmin@att.com",
        "OrgTechRef": "https://rdap.arin.net/registry/entity/ZS44-ARIN"
    },
    "text": [
        "#",
        "# ARIN WHOIS data and services are subject to the Terms of Use",
        "# available at: https://www.arin.net/resources/registry/whois/tou/",
        "#",
        "# If you see inaccuracies in the results, please report at",
        "# https://www.arin.net/resources/registry/whois/inaccuracy_reporting/",
        "#",
        "# Copyright 1997-2020, American Registry for Internet Numbers, Ltd.",
        "#",
        "#",
        "# ARIN WHOIS data and services are subject to the Terms of Use",
        "# available at: https://www.arin.net/resources/registry/whois/tou/",
        "#",
        "# If you see inaccuracies in the results, please report at",
        "# https://www.arin.net/resources/registry/whois/inaccuracy_reporting/",
        "#",
        "# Copyright 1997-2020, American Registry for Internet Numbers, Ltd.",
        "#"
    ]
}
```

## CI

This project uses Github Action Workflows to automatically run tests on pushes to develop and PRs to master.

Pushes to master trigger a Serverless 
deploy to AWS Lambda.

The secrets needed for deployments are stored as Github repo secrets.

This project is also set up with Dependabot to allow automated dependency update PRs.

## Future Improvements

If I continued to work on this here's a short list of some things I'd want to add:

* Param validation on the functions
* Restrict client access to the lambda functions using a JWT authorizer 
* Custom domain on the API Gateway
* Make tests less brittle. 
  * whoisIp currently makes a whois request during the text. Mocking this response would be good
