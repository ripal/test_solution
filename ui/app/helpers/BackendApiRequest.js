"use strict";
import request from "superagent";
import Q from "q";

export function getRequest(url, isLoginRequired = true) {
    let deferred = Q.defer();
    let header;

    //console.log("check.................."/*, isLoginRequired ? window.localStorage.correlation_id : " No login.."*/)
    if (isLoginRequired) { header = { "Accept": "application/json", "Authorization": window.localStorage.token, "x-correlation-id": window.localStorage.correlation_id + "_" + Date.now() }; }
    else { header = { "Accept": "application/json", "x-correlation-id": Date.now() }; }
    // console.log("**********************");
    // console.log("REQUEST [GET] => " + url);
    // console.log("**********************");

    request.get(url).ok(res => res.status <= 600).set(header).then((res) => {
        //   console.log("**********************");
        // console.log("RESPONSE [GET] => " + url);
        //console.log("DATA => " + JSON.stringify(res.body));
        //console.log("**********************");
        deferred.resolve(res);
    }, (err) => {
        // console.log("**********************");
        // console.log("RESPONSE [GET] => " + url);
        // console.log("DATA => " + err);
        // console.log("**********************");
        deferred.reject(err);
    });
    return deferred.promise;
}

export function postRequest(url, send = {}, isLoginRequired = true) {
    let deferred = Q.defer();
    let header;

    if (isLoginRequired) { header = { "Accept": "application/json", "Authorization": window.localStorage.token, "x-correlation-id": window.localStorage.correlation_id + "_" + Date.now() }; }
    else { header = { "Accept": "application/json", "x-correlation-id": Date.now() }; }

    /* console.log("**********************");
     console.log("REQUEST [POST] => " + url);
     console.log("BODY => " + JSON.stringify(send));
     console.log("**********************");*/
    request.post(url).ok(res => res.status <= 600).send(send).set(header).then((res) => {
        /* console.log("**********************");
         console.log("RESPONSE [POST] => " + url);
         console.log("DATA => " + JSON.stringify(res.body));
         console.log("**********************");*/
        deferred.resolve(res);
    }, (err) => {
        /*console.log("**********************");
        console.log("RESPONSE [POST] => " + url);
        console.log("DATA => " + err);
        console.log("**********************");*/
        deferred.reject(err);
    });
    return deferred.promise;
}

export function postRequestFileUpload(url, payload, isLoginRequired = true) {
    let deferred = Q.defer();
    let header = { "Authorization": window.localStorage.token, "x-correlation-id": window.localStorage.correlation_id + "_" + Date.now() };

    request.post(url).attach("file", payload[0]).set(header).field("data", payload[1]).end((res) => {
        deferred.resolve(res);
    },
        (err) => {
            // console.log("error: " + err);
            deferred.reject(err);
        });
    return deferred.promise;
}
