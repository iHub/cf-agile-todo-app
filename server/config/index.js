var envVariables = {
    expressSessionKey: process.env.EXPRESS_SESSION_KEY || '436b2efb-0302-4113-9954-f658f554ea87'
  },
  development = {
    expressSessionKey: envVariables.expressSessionKey
  },
  staging = {
    expressSessionKey: envVariables.expressSessionKey
  },
  production = {
    expressSessionKey: envVariables.expressSessionKey
  };

module.exports = {
  development: development,
  staging: staging,
  production: production,
};