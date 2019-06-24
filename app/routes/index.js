"use strict";
// ----------------------------------------------------------------------
// Third Party Module Dependencies
// ----------------------------------------------------------------------

let express = require("express");
let router = express.Router();
let path = require("./routeutil/UrlPaths");

router.use(path.STACK_EXCHANGE.url, require("./StackExchange"));

module.exports = router;
