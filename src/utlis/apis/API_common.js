// AXIOS
import axios from "axios";

// api url
import { apiUrl } from "./constants";

// cancel token
const CancelToken = axios.CancelToken;

// check user
export async function checkUser(userEmail, userPassword) {
    if (userEmail && userPassword) {
        const user = await axios.post(apiUrl + "api/login_check", {
            username: userEmail,
            password: userPassword,
        });

        return user;
    }
}

// check user
export async function userLogin(userEmail, userPassword) {
    if (userEmail && userPassword) {
        const user = await axios.post(apiUrl + "api/login_check", {
            username: userEmail,
            password: userPassword,
        });

        return user;
    }
}

// check user
export async function getUserInfo(token) {
    if (token) {
        const user = await axios.get(apiUrl + "api/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return user;
    }
}

// get posts
export async function getPosts() {
    const allPosts = await axios.get(apiUrl + "programs");
    return allPosts;
}

// get Single Post

export let cancelGetPost;
export async function getPost(slug) {
    const post = await axios.get(apiUrl + `program/${slug}`, {
        cancelToken: new CancelToken(function executor(c) {
            // An executor function receives a cancel function as a parameter
            cancelGetPost = c;
        }),
    });
    return post;
}

// get daily tips
export async function getDailyTips() {
    const dailyTips = await axios.get(apiUrl + "daily-tips");
    return dailyTips;
}

// get BMI result
export async function getBMIResult(
    token = "",
    kg,
    height,
    body,
    health,
    sleep,
    alcohol,
    fruit,
    water,
    smoking,
    activity
) {
    const bmiResult = await axios.post(
        apiUrl + "bmi",
        {
            kg: kg,
            height: height,
            body: body,
            health: health,
            sleep: sleep,
            alcohol: alcohol,
            fruits: fruit,
            water: water,
            smoking: smoking,
            activity: activity,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return bmiResult;
    // if (token) {
    // }
}

// get posts
export async function bookConsultation(name, email, dob, phone) {
    if (name && email && dob && phone) {
        const returnedDetails = await axios.post(apiUrl + `book-consulation`, {
            name,
            email,
            dob,
            phone,
        });
        return returnedDetails;
    } else {
        console.log("please provide all the values");
    }
}
