// AXIOS
import axios from "axios";

// api url
import { apiUrl } from "./constants";

// cancel token
const CancelToken = axios.CancelToken;

// getting initial recipies
export let cancelSuccessStoriesApi;
export async function getSuccessStories(token, page) {
    if (page) {
        const stories = await axios.get(apiUrl + "stories?p=" + page, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cancelToken: new CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                cancelSuccessStoriesApi = c;
            }),
        });

        return stories;
    } else {
        console.log("Please add required parameters");
    }
}
