const scriptSearchParams = new URLSearchParams(`?${document.currentScript.src.split('?')[1]}`);
const scriptParams = Object.fromEntries(scriptSearchParams.entries());

const urlSearchParams = new URLSearchParams(window.location.search);
const urlParams = Object.fromEntries(urlSearchParams.entries());

// assets path of tiny js app, old vue build
const assetsPath = urlParams.assets_domain
  ?? (scriptParams.local
    ? 'https://localhost:3801/webpack/vue'
    : 'https://www.hypotheekadviesconsumentenbond.nl/apps/v2');

// domain of the iframe, refering to the nuxt resource
const domainOverride = urlParams.iframe_domain
  ?? (scriptParams.local
    ? 'https://localhost:3901'
    : undefined);

window.fritsAppOptions = { 
  domainOverride,
  sentryEnvName: 'development',
  sentryDelivery: true
 };

const addScript = (filename) => {
  const newScript = document.createElement("script");
  newScript.setAttribute("src", `${assetsPath}/${filename}.js`);
  document.body.appendChild(newScript);
}

if (scriptParams.local)
  addScript('runtime');
else
  addScript('vendor');
  
addScript(scriptParams.app);
