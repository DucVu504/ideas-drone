import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = 'node_modules/cesium/Build/Cesium';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            { from: path.join(cesiumWorkers, "Workers"), to: './public/Cesium/Workers' },
            { from: path.join(cesiumSource, 'Assets'), to: './public/Cesium/Assets' },
            { from: path.join(cesiumSource, 'Widgets'), to: './public/Cesium/Widgets' },
            { from: path.join(cesiumSource, 'ThirdParty'), to: './public/Cesium/ThirdParty' },
          ],
        }),
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('/Cesium')
        })
      );

      config.module.rules.push({
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ['file-loader'],
      });
    }

    return config;
  },
};

export default nextConfig;
