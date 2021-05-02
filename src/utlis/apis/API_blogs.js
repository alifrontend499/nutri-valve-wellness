// AXIOS
import axios from "axios";

const apiUrl = "http://api.dealshideal.com/api/";

// getting initial recipies
export async function getBlogs(token, page) {
    if (token && page) {
        const stories = await axios.get(apiUrl + 'getposts/posts?p=' + page, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        return stories
    } else {
        console.log("Please add required parameters")
    }
}