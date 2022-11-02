const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "atharvakutwal2002",
        mongodb_password: "atharvakutwal2002",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-app",
      },
    };
  }
  return {
    env: {
      mongodb_username: "atharvakutwal2002",
      mongodb_password: "atharvakutwal2002",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog-app",
    },
  };
};
