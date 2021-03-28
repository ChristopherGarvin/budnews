const withCSS = require("@zeit/next-css")

module.exports = withCSS({
  env: {
    "DEVELOPMENT_API_URL": "http://localhost:3000",
    "PRODUCTION_API_URL": "https://api.bud-news.com",
    "ALGOLIA_APP_ID": "",
    "ALGOLIA_PUBLIC_API_KEY": "",
    "PRODUCT_NAME": "Bud News"
  }
})
