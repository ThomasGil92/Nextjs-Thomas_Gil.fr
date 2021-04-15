require("dotenv").config();

module.exports = {
  env: {
    REST_API:process.env.REST_API
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://nextjs-thomas-gil-fr.vercel.app/:path*',
      },
    ]
  },
};
