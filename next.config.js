/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  async rewrites() {
    return [
      {
        source: '/apalya/addEmployee',
        destination: 'http://localhost:8085/apalya/addEmployee' // Proxy to Backend
      },
      {
        source: '/apalya/loginCheck',
        destination: 'http://localhost:8085/apalya/loginCheck' // Proxy to Backend
      }
    ]
  }
}