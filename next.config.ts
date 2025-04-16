/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    ZENDESK_ORIGIN:       process.env.ZENDESK_ORIGIN
  }
}
export default nextConfig;