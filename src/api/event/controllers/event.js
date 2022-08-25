const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  // Get logged in users----------------------------------------
  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    const query = {
      filters: {
        user: { id: user.id }
      }
    }

    const data = await this.find({ query: query });
    if (!data) {
      return ctx.notFound();
    }

    const sanitizedEntity = await this.sanitizeOutput(data, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));