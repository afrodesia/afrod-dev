const path = require('path')
const glob = require('glob')
// const paths = require('paths');
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss|svg)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
      ,
      {
        test: /\.svg$/,
        loaders: [
      {
        loader: 'file',
        query: {
          name: 'static/img/[name].[hash:8].[ext]'
        }
    },
    {
      loader: 'react-svg-loader',
      query: {
            jsx: true
          }
        }
      ]
    }
    )
    return config
  }
}
