import request from "superagent";


export const getRequest = (url, payload, method) => {
    let query = payload.data;
    let header = { "Accept": "application/json" };

    console.log("**********************");
    console.log("REQUEST [GET] => " + url);
    console.log("HEADER => ", header)
    console.log("QUERY => " + (query ? JSON.stringify(query) : "NO DATA"));
    console.log("**********************");
    return request.get(url).timeout().ok(res => res.status <= 600).set(header).query(query);
};

export const postRequest = (url, payload, method) => {
    try {
        let query = payload.query;
        let send = payload.data;
        let files = (send && send.files) ? send.files : null;
        let header = { "Accept": "application/json", "Authorization": "Bearer (6bbV68xy8CxRRnoEy0saA))" };

        console.log(payload);
        console.log("**********************");
        console.log("REQUEST [" + method + "] => " + url);
        console.log("HEADER => ", header)
        console.log("DATA => " + (send ? JSON.stringify(send) : "NO DATA"));
        console.log("**********************");
        if (!files) {
            // If the request is not multipart Request
            return request[method](url).timeout().ok(res => res.status <= 600).set(header).query(query).send(send);
        }
        else {
            delete send.files;
            let multipartRequest = request[method](url).timeout().ok(res => res.status <= 600).set(header);

            multipartRequest = files.reduce((multipartRequest, file) => {
                multipartRequest.attach(file.name, file);
                return multipartRequest;
            }, multipartRequest);

            return multipartRequest.field(send).query(query);
        }
    }
    catch (err) {
        console.log(err)
        throw new Error(err);
    }
};
