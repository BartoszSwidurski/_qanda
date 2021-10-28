export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda20211024124634.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda20211024181952-staging.azurewebsites.net'
    : 'https://localhost:44346/';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'https://dev-1y148-mk.us.auth0.com',
  client_id: '7GubTNiK0VjDWtBLtHccNEFxXV7XYYzM',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
