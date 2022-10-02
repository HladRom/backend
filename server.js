const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const atob = require('atob');
const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');
let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');
var cookieParser = require('cookie-parser');

var options = {
	  key: key,
	  cert: cert
};

class HandlerGenerator {
	  login_new (req, res) {
		      let valid;
