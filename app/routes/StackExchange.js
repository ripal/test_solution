"use strict";
// ----------------------------------------------------------------------
// Third Party Module Dependencies
// ----------------------------------------------------------------------
let express = require("express");
let router = express.Router();
let request = require("request-promise-native");

// ----------------------------------------------------------------------
// Application Module Dependencies
// ----------------------------------------------------------------------
let sendResponse = require("./routeutil/SendResponse");
let { HTTP_STATUS, STACK_OVERFLOW_TOKEN } = require("./routeutil/Constants");
let path = require("./routeutil/UrlPaths");

// ----------------------------------------------------------------------
// Routes
// ----------------------------------------------------------------------

/**
 * This route is used to get featured question.
 */

router.get(path.STACK_EXCHANGE.questions, (req, res) => {
    let options = {
        method: "GET",
        uri: path.STACK_EXCHANGE_QUESTIONS_API_ENDPOINT,
        headers: STACK_OVERFLOW_TOKEN,
        qs: req.query,
        gzip: true,
        json: true,
    };

    return request(options).then((result) => {
        if (result && result.items.length > 0) {
            sendResponse(res, HTTP_STATUS.OK, null, result);
        } else {
            sendResponse(res, HTTP_STATUS.NOT_FOUND, "No items found", null);
        }
    }).catch((err) => {
        console.log(err.message, err);
        sendResponse(res, HTTP_STATUS.SERVER_ERROR, "Something went wrong!!", null);
    });
});

/**
 * This route is used to get user profile details.
 */

router.get(path.STACK_EXCHANGE.profile, (req, res) => {
    let options = {
        method: "GET",
        uri: path.STACK_EXCHANGE_PROFILE_API_ENDPOINT + req.params.userId,
        headers: STACK_OVERFLOW_TOKEN,
        qs: req.query,
        gzip: true,
        json: true,
    };

    return request(options).then((result) => {
        if (result && result.items.length > 0) {
            sendResponse(res, HTTP_STATUS.OK, null, result);
        } else {
            sendResponse(res, HTTP_STATUS.NOT_FOUND, "No items found", null);
        }
    }).catch((err) => {
        console.log(err.message, err);
        sendResponse(res, HTTP_STATUS.SERVER_ERROR, "Something went wrong!!", null);
    });
});

/**
 * This route is used to get user tags details.
 */

router.get(path.STACK_EXCHANGE.tags, (req, res) => {
    let options = {
        method: "GET",
        uri: path.STACK_EXCHANGE_PROFILE_API_ENDPOINT + req.params.userId + path.STACK_EXCHANGE_TOP_TAG_ENDPOINT,
        headers: STACK_OVERFLOW_TOKEN,
        qs: req.query,
        gzip: true,
        json: true,
    };

    return request(options).then((result) => {
        if (result && result.items.length > 0) {
            sendResponse(res, HTTP_STATUS.OK, null, result);
        } else {
            sendResponse(res, HTTP_STATUS.NOT_FOUND, "No items found", null);
        }
    }).catch((err) => {
        console.log(err.message, err);
        sendResponse(res, HTTP_STATUS.SERVER_ERROR, "Something went wrong!!", null);
    });
});

/**
 * This route is used to get user tags details.
 */

router.get(path.STACK_EXCHANGE.my_questions, (req, res) => {
    let options = {
        method: "GET",
        uri: path.STACK_EXCHANGE_PROFILE_API_ENDPOINT + req.params.userId + path.STACK_EXCHANGE_MY_QUESTIONS_ENDPOINT,
        headers: STACK_OVERFLOW_TOKEN,
        qs: req.query,
        gzip: true,
        json: true,
    };

    return request(options).then((result) => {
        if (result && result.items.length > 0) {
            sendResponse(res, HTTP_STATUS.OK, null, result);
        } else {
            sendResponse(res, HTTP_STATUS.NOT_FOUND, "No items found", null);
        }
    }).catch((err) => {
        console.log(err.message, err);
        sendResponse(res, HTTP_STATUS.SERVER_ERROR, "Something went wrong!!", null);
    });
});

module.exports = router;
