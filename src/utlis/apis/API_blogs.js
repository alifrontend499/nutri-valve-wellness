// AXIOS
import axios from "axios";

// api url
import { apiUrl } from "./constants";

// getting initial blogs
export async function getBlogs(token, page) {
    if (page) {
        const blogs = await axios.get(apiUrl + "getposts/post?p=" + page, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return blogs;
    } else {
        console.log("Please add required parameters");
    }
}

// getting more blogs
export async function getBlog(token, slug) {
    if (slug) {
        const stories = await axios.get(apiUrl + "getposts/" + slug, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return stories;
    } else {
        console.log("Please add required parameters");
    }
}
