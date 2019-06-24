module.exports = function (res, httpStatusCode = 200, message = null, data = {}) {

    if (httpStatusCode >= 200 && httpStatusCode <= 299) {
        res.status(httpStatusCode).json({ message: message, data: data })

    } else {
        let returnData = null;

        if (httpStatusCode === 500 && !message) {
            message = "Something went wrong!!";
        } else if (httpStatusCode === 400 && !message) {
            message = "Invalid request!!";
        }
        else if (httpStatusCode === 401) {
            returnData = data;
        }
        res.status(httpStatusCode).json({ message: message, data: returnData })
    }
}
