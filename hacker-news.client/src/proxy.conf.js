const { env } = require('process');

const PROXY_CONFIG = [
  {
    context: [
      "/api/"
    ],
    target: "https://localhost:7159",
    secure: false
  }
]

module.exports = PROXY_CONFIG;