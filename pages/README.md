# CBHS Tools

Pages where we can test cbhs affiliate tools with. Key is to have it run on a different domain, so we can verify CORS issues and cookies behavior.

- [Oversluiten tool (Refinance tool)](https://ikbenfrits.github.io/pages/cbhs/oversluiten/)
- [Rentemiddelen tool (Rate averaging tool)](https://ikbenfrits.github.io/pages/cbhs/rentemiddelen/)
- [Maandlasten tool (Monthly charge tool)](https://ikbenfrits.github.io/pages/cbhs/maandlasten/)
- [Maximale Hypotheek tool (Max Mortgage tool)](https://ikbenfrits.github.io/pages/cbhs/maximale_hypotheek/)
- [Rentevergelijker (Interest compare)](https://ikbenfrits.github.io/pages/cbhs/rentevergelijker/)
- [Afspraak maken tool (Appointment app)](https://ikbenfrits.github.io/pages/cbhs/afspraak_maken/)


## Add new test page for a tool

Check out `/nuxt/server_middleware/nuxt_api/html/index.js` in `frits-website` project. Take element and tool identifiers to make up new html.