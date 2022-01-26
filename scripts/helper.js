const log = (msg, data) => {
  console.log(`[ikbenfrits.github.io helper] ${msg}`, data);
}

const addScript = (filename) => {
  const newScript = document.createElement('script');
  newScript.setAttribute('src', `${assetsPath}/${filename}.js`);
  document.body.appendChild(newScript);
}

// inject shared style
const injectStyle = () => {
  const linkStyle = document.createElement('link');
  linkStyle.rel = 'stylesheet';
  linkStyle.href = '/pages/style.css';
  document.head.appendChild(linkStyle);
}

const getEnvironment = (iframeDomain) => {
  if (!iframeDomain)
    return { color: 'red', name: 'production' };
  
  if (iframeDomain === 'https://localhost:3901')
    return { color: 'green', name: 'local' };
  
  return { color: 'orange', name: 'test' };
}

// render notification about the environment
const renderNotification = (fritsAppOptions) => {
  const el = document.createElement('div');
  el.classList.add('test-page-notification');
  
  const env = getEnvironment(fritsAppOptions.iframeDomain);

  el.innerHTML = `
    <h2 class="test-page-title">[ikbenfrits.github.io] CBHS Tool test page</h2>
    <div class="env-title">Environment:</div>
    <div class="env ${env.color}">${env.name}</div>
    <p>Assets path: ${fritsAppOptions.assetsPath}</p>
    <p>Iframe domain: ${fritsAppOptions.iframeDomain ?? 'https://www.hypotheekadviesconsumentenbond.nl'}</p>
  `;
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
renderNotification(window.fritsAppOptions);

log('window.fritsAppOptions', window.fritsAppOptions);
