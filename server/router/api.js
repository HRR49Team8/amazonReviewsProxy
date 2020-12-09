const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const { service1, service2, service3, service4 } = require('../config/services.js');

const router = Router();

router.get(`/${process.env.LOADERIO}.txt`, (req, res) => res.sendFile(path.join(__dirname, `/${process.env.LOADERIO}.txt`)));
router.use(service1.api, createProxyMiddleware({ target: service1.url, changeOrigin: true }));
router.use(service2.api, createProxyMiddleware({ target: service2.url, changeOrigin: true }));
router.use(service3.api, createProxyMiddleware({ target: service3.url, changeOrigin: true }));
router.use(service4.api, createProxyMiddleware({ target: service4.url, changeOrigin: true }));

module.exports = router;
