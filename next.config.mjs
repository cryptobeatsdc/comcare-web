/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 404 global para rutas sin coincidencia: el root layout vive en app/[lang],
    // así que la página por defecto no puede componerse desde un layout raíz.
    globalNotFound: true,
  },
};

export default nextConfig;
