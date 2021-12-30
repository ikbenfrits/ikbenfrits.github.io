const scriptSearchParams = new URLSearchParams(`?${document.currentScript.src.split('?')[1]}`);
const scriptParams = Object.fromEntries(scriptSearchParams.entries());

const urlSearchParams = new URLSearchParams(window.location.search);
const urlParams = Object.fromEntries(urlSearchParams.entries());

const assetsDomain = scriptParams.local
  ? 'https://website-stijn.frits.io'
  : urlParams.assets_domain
      ? urlParams.assets_domain
      : 'https://www.hypotheekadviesconsumentenbond.nl'

const assetsPath = `${assetsDomain}/apps/v2`;

const domainOverride = scriptParams.local
  ? 'https://localhost:3901'
  : urlParams.iframe_domain

window.fritsAppOptions = { domainOverride };

const vendor = document.createElement("script");
vendor.setAttribute("src", `${assetsPath}/vendor.js`);
document.body.appendChild(vendor);

const app = document.createElement("script");
app.setAttribute("src", `${assetsPath}/${scriptParams.app}.js`);
document.body.appendChild(app);