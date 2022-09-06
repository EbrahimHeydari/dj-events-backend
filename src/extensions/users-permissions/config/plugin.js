module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env(getSecret(crypto.randomBytes(16).toString('base64'))),
    }
  }
})