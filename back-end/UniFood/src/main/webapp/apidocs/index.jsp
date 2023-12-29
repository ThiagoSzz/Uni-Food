 <%@page contentType="text/html" pageEncoding="UTF-8"%>
 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Swagger UI</title>
    <link rel="stylesheet" type="text/css" href="./swagger-ui.css" />
    <link rel="icon" type="image/png" href="./favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="./favicon-16x16.png" sizes="16x16" />
    <style>
      html
      {
        box-sizing: border-box;
        overflow: -moz-scrollbars-vertical;
        overflow-y: scroll;
      }

      *,
      *:before,
      *:after
      {
        box-sizing: inherit;
      }

      body
      {
        margin:0;
        background: #fafafa;
      }
    </style>
    <style>#client_secret,label[for=client_secret]{display: none;}</style>
  </head>

  <body>
    <div id="swagger-ui"></div>

    <script src="./swagger-ui-bundle.js" charset="UTF-8"> </script>
    <script src="./swagger-ui-standalone-preset.js" charset="UTF-8"> </script>
    <script>
    window.onload = function() {
      var full = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
      const ui = SwaggerUIBundle({
        tagsSorter: "${swaggerUiConfig.tagsSorter}",
        url: "<%=request.getContextPath()%>/openapi.json",
        dom_id: '#swagger-ui',
        validatorUrl: null,
        deepLinking: false,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        oauth2RedirectUrl: full + "<%=request.getContextPath()%>/apidocs/oauth2-redirect.html"
      });

      ui.initOAuth({
    	    clientId: "${swaggerUiConfig.clientId}",
    	    appName: "SOEAuth",
    	    scopeSeparator: " ",
    	    scopes: "openid",
    	    useBasicAuthenticationWithAccessCodeGrant: false,
    	    usePkceWithAuthorizationCodeGrant: true
    	    
    	  })
      window.ui = ui;
    };
  </script>
  </body>
</html>
