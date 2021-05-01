// AXIOS
import axios from "axios";

const apiUrl = "http://api.dealshideal.com/api/";

// check user
export async function getStories(token, page) {
    if (token && page) {
        const stories = await axios.get(apiUrl + 'getposts/story?p=' + page, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'contentType': 'application/JSON'
            },
        });

        return stories
    } else {
        console.log("Please add required parameters")
    }
}