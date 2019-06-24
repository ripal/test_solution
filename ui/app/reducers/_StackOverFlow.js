import * as type from "../actions/ActionTypes";

export const getFeaturedQuestions = (state = {}, action) => {
    switch (action.type) {
        case type.getFeaturedQuestions.success:
        case type.getFeaturedQuestions.fail:
        case type.getFeaturedQuestions.processing:
            return {
                ...state,
                status: action.type,
                data: action.payload.data || null,
            };

        default:
            return state;
    }
};

export const getUserProfile = (state = {}, action) => {
    switch (action.type) {
        case type.getUserProfile.success:
        case type.getUserProfile.fail:
        case type.getUserProfile.processing:
            return {
                ...state,
                status: action.type,
                data: action.payload.data || null,
            };

        default:
            return state;
    }
};

export const getTopTags = (state = {}, action) => {
    switch (action.type) {
        case type.getTopTags.success:
        case type.getTopTags.fail:
        case type.getTopTags.processing:
            return {
                ...state,
                status: action.type,
                data: action.payload.data || null,
            };

        default:
            return state;
    }
};

export const getUserQuestions = (state = {}, action) => {
    switch (action.type) {
        case type.getUserQuestions.success:
        case type.getUserQuestions.fail:
        case type.getUserQuestions.processing:
            return {
                ...state,
                status: action.type,
                data: action.payload.data || null,
            };

        default:
            return state;
    }
};
