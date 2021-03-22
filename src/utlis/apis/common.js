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

// get BMI result
export async function getBMIResult(token, kg, height, body, health, sleep) {
	if (token) {
		const bmiResult = await axios.post(
			apiUrl + "/bmi",
			{
				kg: kg,
				height: height,
				body: body,
				health: health,
				sleep: sleep,
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
