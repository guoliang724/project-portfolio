const nextConfig = {
  /* config options here */
  remotePatterns: [
    {
      protocol: "https",
      hostname: "flowbite.s3.amazonaws.com",
      pathname: "**",
    },
  ],
};

export default nextConfig;
