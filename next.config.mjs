
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';


const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },

  webpack: (config, { isServer }) => {
    const projectRoot = process.cwd();

    config.resolve.alias = {
      ...config.resolve.alias,
      cesium: path.resolve(projectRoot, 'node_modules/cesium/Source/Cesium.js'),

    };
    
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join('node_modules', 'cesium', 'Build', 'Cesium'),
            to: 'public/cesium',
          },
        ],
      })
    );

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        http: false,
        https: false,
        zlib: false,
        stream: false,
        crypto: false,
        buffer: false,
      };
    }

    return config;
  },
};

export default nextConfig;
