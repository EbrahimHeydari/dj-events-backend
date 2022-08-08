module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1448158f5d477fa8c447a56171f5dd1c'),
  },
});
