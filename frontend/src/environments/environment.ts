/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-09os6cx8.us', // the auth0 domain prefix
    audience: 'http://localhost:5100', // the audience set for the auth0 app
    clientId: 'c47qgRC0P1YyuO8TwuLUKyhu0D139uLl', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
 