// AXIOS
import axios from "axios";

// const apiUrl = "http://api.dealshideal.com/api/";
const apiUrl = "http://portal.nutrivalvewellness.com/";

// getting initial recipies
export async function getSuccessStories(token, page) {
    if (page) {
        const stories = await axios.get(apiUrl + "stories?p=" + page, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return stories;
    } else {
        console.log("Please add required parameters");
    }
}
