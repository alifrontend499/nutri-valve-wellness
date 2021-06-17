// AXIOS
import axios from "axios";

const apiUrl = "http://portal.nutrivalvewellness.com/";

// getting initial recipies
export async function getRecipes(token, page) {
    if (page) {
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
    if (slug) {
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