// server.js
const express = require('express')
const next = require('next')
const proxyMiddleware = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware');

const devProxy = {
    '/api': {
        target: 'http://localhost:5789', // 端口自己配置合适的
        pathRewrite: {
            '^/api': '/'
        },
        changeOrigin: true
    }
}

const options = {
    target: 'https://movie.douban.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      '^/apis': '/', // remove base path
    },
    // router: {
    //   // when request.headers.host == 'dev.localhost:3000',
    //   // override target 'http://www.example.org' to 'http://localhost:8000'
    //   'https://movie.douban.com': 'http://localhost:5789',
    // },
  };

  const options2 = {
    target: 'https://img2.doubanio.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      '^/img2': '/', // remove base path
    },
    // router: {
    //   // when request.headers.host == 'dev.localhost:3000',
    //   // override target 'http://www.example.org' to 'http://localhost:8000'
    //   'https://movie.douban.com': 'http://localhost:5789',
    // },
  };

const port = parseInt(process.env.PORT, 10) || 5789
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.use('/apis', createProxyMiddleware(options));

        // if (dev && devProxy) {
        //     Object.keys(devProxy).forEach(function(context) {
        //         server.use(proxyMiddleware(context, devProxy[context]))
        //     })
        // }

        server.all('*', (req, res) => {
            // if(res.url == '/apis'){
            console.log(req.originalUrl)
            // }
            handle(req, res)
        })

        server.listen(port, err => {
            if (err) {
                throw err
            }
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch(err => {
        console.log('An error occurred, unable to start the server')
        console.log(err)
    })