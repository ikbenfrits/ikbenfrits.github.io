const scriptSearchParams = new URLSearchParams(`?${document.currentScript.src.split('?')[1]}`);
const scriptParams = Object.fromEntries(scriptSearchParams.entries());

const urlSearchParams = new URLSearchParams(window.location.search);
const urlParams = Object.fromEntries(urlSearchParams.entries());

const assetsPath = urlParams.assets_domain
  ?? scriptParams.local
    ? 'https://localhost:3901/webpack/vue'
    : 'https://www.hypotheekadviesconsumentenbond.nl/apps/v2'

const domainOverride = urlParams.iframe_domain
  ?? scriptParams.local
    ? 'https://localhost:3901'
    : undefined;

window.fritsAppOptions = { domainOverride };

const addScript = (filename) => {
  const newScript = document.createElement("script");
  newScript.setAttribute("src", `${assetsPath}/${filename}.js`);
  document.body.appendChild(newScript);
}

if (scriptParams.local)
  addScript('runtime');
  
addScript('vendor');
addScript(scriptParams.app);
