// AXIOS
import axios from "axios";

const apiUrl = "http://api.dealshideal.com/api/";

// getting initial recipies
export async function getRecipes(token, page) {
    if (token && page) {
        const stories = await axios.get(apiUrl + 'getposts/recipe?p=' + page, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        return stories
    } else {
        console.log("Please add required parameters")
    }
}

// getting more recipies
export async function getRecipe(token, slug) {
    if (token && slug) {
        const stories = await axios.get(apiUrl + 'getpost/' + slug, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        return stories
    } else {
        console.log("Please add required parameters")
    }
}