module.exports = (data) => `
<!doctype html>
<html lang="en">
  <script data-dapp-detection="">!function(){let e=!1;function n(){if(!e){const n=document.createElement("meta");n.name="dapp-detected",document.head.appendChild(n),e=!0}}if(window.hasOwnProperty("ethereum")){if(window.__disableDappDetectionInsertion=!0,void 0===window.ethereum)return;n()}else{var t=window.ethereum;Object.defineProperty(window,"ethereum",{configurable:!0,enumerable:!1,set:function(e){window.__disableDappDetectionInsertion||n(),t=e},get:function(){if(!window.__disableDappDetectionInsertion){const e=arguments.callee;e&&e.caller&&e.caller.toString&&-1!==e.caller.toString().indexOf("getOwnPropertyNames")||n()}return t}})}}();</script>
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <meta content="#333333" name="theme-color">
    <base href="/">
    <link href="global.css" rel="stylesheet">
    <link href="manifest.json" rel="manifest" crossorigin="use-credentials">
    <link href="favicon.png" rel="icon" type="image/png">
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> <script>__SAPPER__={baseUrl:"",preloaded:[void 0,{}]};if('serviceWorker' in navigator)navigator.serviceWorker.register('/service-worker.js');(function(){try{eval("async function x(){}");var main="/client/client.6cff3ab8.js"}catch(e){main="/client/legacy/client.8c6118a0.js"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="/client/shimport@2.0.4.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());</script><script src="/client/client.6cff3ab8.js" type="module" crossorigin="use-credentials"></script> 
    <link href="client/client-e118e612.css" rel="stylesheet">
    <link href="client/index-f906806b.css" rel="stylesheet">
    <title>${data.name}</title>
    <link href="/client/client.6cff3ab8.js" rel="modulepreload" as="script" crossorigin="use-credentials">
    <link href="/client/client-e118e612.css" rel="preload" as="style">
    <link href="/client/index.d681eda1.js" rel="modulepreload" as="script" crossorigin="use-credentials">
    <link href="/client/inject_styles.5607aec6.js" rel="modulepreload" as="script" crossorigin="use-credentials">
    <link href="/client/index-f906806b.css" rel="preload" as="style">
    <link rel="stylesheet" href="https://competent-hodgkin-cf9742.netlify.app/client/index-7ed37c94.css">
    <link rel="stylesheet" href="https://competent-hodgkin-cf9742.netlify.app/client/[slug]-5bc8f95f.css">
    <link rel="stylesheet" href="https://competent-hodgkin-cf9742.netlify.app/client/index-568b94c6.css">
  </head>
  <body>
    <div id="sapper">
      <nav class="svelte-1dbd5up">
        <ul class="svelte-1dbd5up">
          <li class="svelte-1dbd5up"><a class="svelte-1dbd5up" href=".">home</a></li>
          <li class="svelte-1dbd5up"><a class="svelte-1dbd5up" href="about">about</a></li>
          <li class="svelte-1dbd5up"><a class="svelte-1dbd5up" href="blog" rel="prefetch">blog</a></li>
          <li class="svelte-1dbd5up"><a class="svelte-1dbd5up" href="teste" rel="prefetch" aria-current="page">teste</a></li>
        </ul>
      </nav>
      <main class="svelte-1uhnsl8">
        <h1>${data.name}</h1>
        <div class="content svelte-emm3f3">${data.html}</div>
      </main>
    </div>
    <iframe id="netlify-identity-widget" title="Netlify identity widget" style="position: fixed; top: 0; left: 0; border: none; width: 100%; height: 100%; overflow: visible; background: transparent; display: none; z-index: 99; " src="about:blank"></iframe>
  </body>
</html>
`;
