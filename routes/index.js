var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function (req, res, next) {
  // Define environment variables with default values
  const colour = process.env.COLOUR || 'white';
  const site = process.env.SITE || 'PROD';
  const dbconn = process.env.DBCONN || 'dbconn-from-node.js';
  const auth = process.env.AUTH || 'https://alwayson';

  res.render('index', {
    title: 'Express',
    colour: colour,
    site: site,
    dbconn: dbconn,
    auth: auth
  });
});

/* GET health status */
router.get('/health', function (req, res) {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    hostname: os.hostname(),
    memory: {
      free: os.freemem(),
      total: os.totalmem()
    }
  });
});

module.exports = router;
