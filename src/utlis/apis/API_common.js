// AXIOS
import axios from "axios";

const apiUrl = "http://portal.nutrivalvewellness.com/";
// check user
export async function checkUser(userEmail, userPassword) {
    if (userEmail && userPassword) {
        const user = await axios.post(apiUrl + "/api/login_check", {
            username: userEmail,
            password: userPassword,
        });

        return user;
    }
}

// check user
export async function userLogin(userEmail, userPassword) {
    if (userEmail && userPassword) {
        const user = await axios.post(apiUrl + "/api/login_check", {
            username: userEmail,
            password: userPassword,
        });

        return user;
    }
}

// get posts
export async function getPosts(token = "", type) {
    const allPosts = await axios.get(apiUrl + `/getposts/${type}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return allPosts;
    // if (token) {
    // }
}
// get Single Post
export async function getPost(token = "", slug) {
    const post = await axios.get(apiUrl + `/getpost/${slug}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return post;
    // if (token) {
    // }
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
        apiUrl + "/bmi",
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
        const returnedDetails = await axios.post(apiUrl + `/book-consulation`, {
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
