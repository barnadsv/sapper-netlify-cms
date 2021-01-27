module.exports = (data) => {
    return `<!doctype html>
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
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>${data.name}</title>
        <styles>
          ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}
          .content.svelte-emm3f3 h2{font-size:1.4em;font-weight:500}.content.svelte-emm3f3 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-emm3f3 pre code{background-color:transparent;padding:0}.content.svelte-emm3f3 ul{line-height:1.5}.content.svelte-emm3f3 li{margin:0 0 0.5em 0}
          h1.svelte-fo2wfu,figure.svelte-fo2wfu,p.svelte-fo2wfu{text-align:center;margin:0 auto}h1.svelte-fo2wfu{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0}figure.svelte-fo2wfu{margin:0 0 1em 0}p.svelte-fo2wfu{margin:1em auto}@media(min-width: 480px){h1.svelte-fo2wfu{font-size:4em}}
          .content.svelte-gak8nd{display:grid;grid-template-columns:20% 80%;grid-column-gap:10px}
          
          nav.svelte-1dbd5up {
            border-bottom: 1px solid rgba(255,62,0,0.1);
            font-weight: 300;
            padding: 0 1em;
          }

          main.svelte-1uhnsl8 {
            position: relative;
            max-width: 56em;
            background-color: white;
            padding: 2em;
            margin: 0 auto;
            box-sizing: border-box;
          }
        </styles>
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
}

