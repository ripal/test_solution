import * as urls from "./Urls";

/**
 * Builds the action type which will be dispatched to store to perform task on action type
 * @param processing: indicates status request is made and response is yet to receive
 * @param success: indicates status of response is received upon requested
 * @param fail: indicates status of request is failed due to any reason
 */
let build = (type, url, requestType = "get", processingExtraActions = [], successExtraActions = [], failExtraActions = []) => {
    let template = {};

    template.processing = type.toUpperCase() + "_PROCESSING";
    template.success = type.toUpperCase() + "_SUCCESS";
    template.fail = type.toUpperCase() + "_FAIL";

    if (Array.isArray(processingExtraActions) && processingExtraActions.length > 0) {
        // Need to dispatch extra actions on processing so make an array of all actions
        template.processingExtraActions = processingExtraActions;
    }

    if (Array.isArray(successExtraActions) && successExtraActions.length > 0) {
        // Need to dispatch extra actions on success so make an array of all actions
        template.successExtraActions = successExtraActions;
    }

    if (Array.isArray(failExtraActions) && failExtraActions.length > 0) {
        // Need to dispatch extra actions on fail so make an array of all actions
        template.failExtraActions = failExtraActions;
    }

    template.url = url;
    template.requestType = requestType;
    return template;
};

export const getFeaturedQuestions = build("getFeaturedQuestions", urls.stackOverflowAPI.GET_FEATURED_QUESTIONS, "get");
export const getUserProfile = build("getUserProfile", urls.stackOverflowAPI.GET_USER_PROFILE, "get");
export const getTopTags = build("getTopTags", urls.stackOverflowAPI.GET_TOP_TAGS, "get");
export const getUserQuestions = build("getUserQuestions", urls.stackOverflowAPI.GET_USER_QUESTIONS, "get");
