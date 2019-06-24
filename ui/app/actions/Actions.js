import * as actionTypes from "./ActionTypes";
import { postRequest, getRequest } from "./RequestUtils.js";

export const dispatchAllExtraActions = (dispatch, actions, payload) => {
    if (Array.isArray(actions)) {
        actions.map((action) => {
            dispatch({ type: action, payload: payload });
        });
    }
};

export const action = (payload, updateState) => dispatch => {
    // console.log("action url-> action dispatched...->" + payload)

    /**
     * @param {object} payload  -> if action is dispatched to call backend api or 
     *                             any backend related action then payload is data 
     *                             to send in backend.
     * 
     * @param {string} payload  -> if action is any other action to change only 
     *                             app level states like common component states 
     *                             then payload is reducerName(string) which will 
     *                             handle this action.
     * 
     * @param {object} updateState -> this parameter only used with app level actions
     *                                which doesn't perform any backend related action.
     *                                In that case updateState object directly represent
     *                                app level states to alter with value.  
     **/
    try {
        if (typeof payload === "string" && typeof updateState === "object") {
            // Only update the existing state
            let reducerName = payload;

            dispatch({ type: "UPDATE_REDUCER_" + reducerName, payload: updateState });
        }
        else {
            // Make a backend request
            let type = payload.type;
            let saveToken = typeof payload.saveToken === "boolean" ? payload.saveToken : true;
            let url = typeof actionTypes[type].url === "function" ? actionTypes[type].url(payload.params) : (actionTypes[type].url || "");
            let requestType = actionTypes[type].requestType || "";
            let processingActionType = actionTypes[type].processing || "";
            let processingExtraActions = actionTypes[type].processingExtraActions || "";
            let successActionType = actionTypes[type].success || "";
            let successExtraActions = actionTypes[type].successExtraActions || "";
            let failActionType = actionTypes[type].fail || "";
            let failExtraActions = actionTypes[type].failExtraActions || "";
            // let updateProgressBarAction = actionTypes.progressBar.update || "";
            let req;

            // console.log("action url->->" + url);
            switch (requestType.toLowerCase()) {
                case "get":
                    req = getRequest;
                    break;

                case "post":
                case "put":
                case "delete":
                    req = postRequest;
                    break;

                default:
                    break;
            }
            dispatch({ type: processingActionType, payload: payload.data || {} });
            dispatchAllExtraActions(dispatch, processingExtraActions, {});
            return req(url, payload, requestType.toLowerCase()).then((res) => {
                console.log("**********************");
                console.log("RESPONSE " + requestType.toUpperCase() + " => " + url);
                console.log("DATA => " + JSON.stringify(res.body));
                console.log("**********************");
                if (res.statusCode >= 200 && res.statusCode <= 299) {

                    dispatch({ type: successActionType, payload: res.body });
                    dispatchAllExtraActions(dispatch, successExtraActions, res.body);

                }
                else if (res.statusCode === 401 && res.body && res.body.data && res.body.data.errorType === "TokenExpiredError") {
                    setTimeout(() => window.location.reload(), 500);
                }
                else {

                    dispatch({ type: failActionType, payload: res.body });
                    dispatchAllExtraActions(dispatch, failExtraActions, res.body);
                }

                return res.body;
            }).catch((err) => {
                console.log("**********************");
                console.log("RESPONSE " + requestType.toUpperCase() + " => " + url);
                console.log("DATA => " + err);
                console.log("**********************");

                dispatch({ type: failActionType, payload: err });
                dispatchAllExtraActions(dispatch, failExtraActions, err);
            });
        }
    }
    catch (err) {
        console.error(err);
    }
};
