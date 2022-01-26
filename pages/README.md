# CBHS Tools

Pages where we can test cbhs affiliate tools with. Key is to have it run on a different domain, so we can verify CORS issues and cookies behavior. For more details, read [How to Use CBHS Tools](https://ikbenfrits.atlassian.net/wiki/spaces/FRON/pages/1367080961/How+to+use+CBHS+tools) on the Ikbenfrits Confluence.

Currently available:

- [Oversluiten tool (Refinance tool)](https://ikbenfrits.github.io/pages/cbhs/oversluiten/)
- [Rentemiddelen tool (Rate averaging tool)](https://ikbenfrits.github.io/pages/cbhs/rentemiddelen/)
- [Maandlasten tool (Monthly charge tool)](https://ikbenfrits.github.io/pages/cbhs/maandlasten/)
- [Maximale Hypotheek tool (Max Mortgage tool)](https://ikbenfrits.github.io/pages/cbhs/maximale-hypotheek/)
- [Rentevergelijker (Interest compare)](https://ikbenfrits.github.io/pages/cbhs/rentevergelijker/)
- [Afspraak maken tool (Appointment app)](https://ikbenfrits.github.io/pages/cbhs/afspraak-maken/)


## Add new test page for a tool

Check out `/nuxt/server_middleware/nuxt_api/html/index.js` in `frits-website` project. Take element and tool identifiers to make up new index.html and local.html.

## Examples

### URL Local
https://ikbenfrits.github.io/pages/cbhs/rentemiddelen/local

### URL Local BrowserStack:
https://ikbenfrits.github.io/pages/cbhs/oversluiten/local?iframe_domain=https%3A%2F%2Fbs-local.com%3A3901&assets_path=https%3A%2F%2Fbs-local.com%3A3801%2Fwebpack%2Fvue

### URL with params:
https://ikbenfrits.github.io/pages/cbhs/rentevergelijker/?iframe_domain=https%3A%2F%2Fcbhs-website-fe-57.cbhs.io/&assets_path=https%3A%2F%2Fcbhs-website-fe-57.cbhs.io%2Fapps%2Fv2

### URL with params, staging env: 
https://ikbenfrits.github.io/pages/cbhs/maximale-hypotheek/?iframe_domain=https%3A%2F%2Fwww.cbhs.io&assets_path=https%3A%2F%2Fwww.cbhs.io%2Fapps%2Fv2

This above url is used in automatic testing in CBHS Gitlab CI pipelines. So it should always work, behind vpn.

### URL when project run locally
http://127.0.0.1:7700/pages/cbhs/maximale-hypotheek/local.html

When serving this project locally, visit URL's with `.html` at the end.