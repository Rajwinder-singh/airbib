/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com']
  },
  env: {
    MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoicmFqd2luZGVyczQ3NCIsImEiOiJjbGYwNzdmbWswNjlwM3ZwcDc3c3B3cWZxIn0.4ggVOhHPkX9AavMQQtCbUQ"
  }
};
