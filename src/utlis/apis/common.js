// AXIOS
import axios from "axios";

const apiUrl = "http://api.dealshideal.com/api";
// check user
export async function checkUser(userEmail, userPassword) {
	if (userEmail && userPassword) {
		const user = await axios.post(apiUrl + "/login_check", {
			username: userEmail,
			password: userPassword,
		});
		
		return user;
	}
}

// get posts
export async function getPosts(token, type) {
	if (token) {
		const allPosts = await axios.get(apiUrl + `/getposts/${type}`, {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		});
		return allPosts;
	}
}
// get Single Post
export async function getPost(token, slug) {
	if (token) {
		const post = await axios.get(apiUrl + `/getpost/${slug}`, {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		});
		return post;
	}
}

// get BMI result
export async function getBMIResult(token, kg, height, body, health, sleep, alcohol, fruit, water, smoking,activity) {
	if (token) {
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
	}
}
