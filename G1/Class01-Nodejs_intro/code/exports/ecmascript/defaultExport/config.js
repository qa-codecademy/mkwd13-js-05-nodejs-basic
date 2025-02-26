const config = {
  port: 3000,
  environment: "development",
};

function showConfig() {
  console.log(
    `Server is running on port ${config.port} in ${config.environment} environment.`
  );
}

export default {
  config,
  showConfig,
};
