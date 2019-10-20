const dotenv = require('dotenv');
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
(function(){
    console.log(dotenv.config());
})()

const plugins = [];

console.log('process.env.USERAUTHAPI: ', process.env.USERAUTHAPI);
console.log('process.env.USERAUTHAPI: ', process.env.LOCAL_USERAUTHAPI);

module.exports = withPlugins( plugins,{
    webpack: config => {
        const env = new webpack.EnvironmentPlugin({
          DEBUG: 'development',
          USERAUTHAPI: process.env.USERAUTHAPI,
          LOCAL_USERAUTHAPI: process.env.LOCAL_USERAUTHAPI
          //ORIGIN_URL: `${protocol}://${host}${port}`
        })
        config.node = { fs: 'empty' };
        config.plugins.push(env)
        return config;
      }
});