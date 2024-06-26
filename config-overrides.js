module.exports = {
    webpack: function(config, env) {
      return config;
    },
    eslint: function(config) {
      if (process.env.CI) {
        config.rules = {
          ...config.rules,
          "no-unused-vars": "warn"
        };
      }
      return config;
    }
  };
  