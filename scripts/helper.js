const scriptSearchParams = new URLSearchParams(`?${document.currentScript.src.split('?')[1]}`);
const scriptParams = Object.fromEntries(scriptSearchParams.entries());

const urlSearchParams = new URLSearchParams(window.location.search);
const urlParams = Object.fromEntries(urlSearchParams.entries());

const assetsDomain = scriptParams.local
  ? 'https://cbhs-website-fe-57.cbhs.io'
  : urlParams.assets_domain
      ? urlParams.assets_domain
      : 'https://www.hypotheekadviesconsumentenbond.nl'

const assetsPath = `${assetsDomain}/apps/v2`;

const domainOverride = scriptParams.local
  ? 'https://localhost:3901'
  : urlParams.iframe_domain

window.fritsAppOptions = { domainOverride };

const addScript = (filename) => {
  const newScript = document.createElement("script");
  newScript.setAttribute("src", `${assetsPath}/${filename}.js`);
  document.body.appendChild(newScript);
}

addScript('runtime');
addScript('vendor');
addScript(scriptParams.app);
