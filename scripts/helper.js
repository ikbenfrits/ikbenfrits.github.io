const log = (msg, data) => {
  console.log('[ikbenfrits.github.io helper] ' + msg, data);
}

const addScript = (filename) => {
  const newScript = document.createElement("script");
  newScript.setAttribute("src", `${assetsPath}/${filename}.js`);
  document.body.appendChild(newScript);
}

// inject shared style
const injectStyle = () => {
  const linkStyle = document.createElement('link');
  linkStyle.rel = stylesheet;
  linkStyle.href = '/pages/style.css';

  document.head.appendChild(linkStyle);
}

// render notification about the environment
const renderNotification = () => {
  const el = document.createElement('div');
  el.classList.add('test-page-notification');

  el.innerHTML = '';

  document.body.appendChild(el);
}

const scriptSearchParams = new URLSearchParams(`?${document.currentScript.src.split('?')[1]}`);
const scriptParams = Object.fromEntries(scriptSearchParams.entries());

const urlSearchParams = new URLSearchParams(window.location.search);
const urlParams = Object.fromEntries(urlSearchParams.entries());

// assets path of tiny js app, old vue build
const assetsPath = urlParams.assets_path
  ?? (scriptParams.local
    ? 'https://localhost:3801/webpack/vue'
    : 'https://www.hypotheekadviesconsumentenbond.nl/apps/v2');

// domain of the iframe, refering to the nuxt resource
const iframeDomain = urlParams.iframe_domain
  ?? (scriptParams.local
    ? 'https://localhost:3901'
    : undefined);

window.fritsAppOptions = { 
  iframeDomain,
  assetsPath,
  sentryEnvName: 'development',
  sentryDelivery: true
};

if (scriptParams.local)
  addScript('runtime');
else
  addScript('vendor');
  
addScript(scriptParams.app);

injectStyle();
renderNotification();

log('window.fritsAppOptions', window.fritsAppOptions);
