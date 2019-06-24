const SERVER_HOST = process.env.API_URL || "http://localhost:3000/mdw/";

export const stackOverflowAPI = {
    GET_FEATURED_QUESTIONS: SERVER_HOST + "stacks/questions",
    GET_USER_PROFILE: (params) => SERVER_HOST + "stacks/profile/" + params.userId,
    GET_TOP_TAGS: (params) => SERVER_HOST + "stacks/tags/" + params.userId,
    GET_USER_QUESTIONS: (params) => SERVER_HOST + "stacks/myquestions/" + params.userId,
}