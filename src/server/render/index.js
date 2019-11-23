import getManifest from '../getManifest';

let files = false;
if (process.env.NODE_ENV !== 'development') files = getManifest();

const render = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <title>KIIN Messenger</title>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="${files ? files['main.js'] : 'assets/app.js'}" type="text/javascript"></script>
        <script src="${files ? files['vendors.js'] : 'assets/vendor.js'}" type="text/javascript"></script>
      </body>
    </html>
  `);
};

export default render;
