const { redirect } = require("next/dist/server/api-utils");

module.exports = {
  async redirects() {
    return [
      {
        source: "/menu/pizzas",
        destination: "/menu",
        permanent: true,
      },
    ];
  },
};
