// AXIOS
import axios from "axios";

// check user
export async function checkUser(userEmail, userPassword) {
    if (userEmail && userPassword) {
        const user = await axios.post('http://api.dealshideal.com/api/login_check', {
            username: userEmail,
            password: userPassword
        })

        return user
    }
}

// get posts
export async function getPosts(token) {
    if (token) {
        const allPosts = await axios.get('http://api.dealshideal.com/api/getposts/program', {
            tocken: token  
        })

        return allPosts
    }
}