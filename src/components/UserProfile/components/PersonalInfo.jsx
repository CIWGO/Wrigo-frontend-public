import { useState, useEffect } from "react";
import Email from "./Email";
import newRequest from "../../../utils/newRequest";
import {
	InformationCard,
	ButtonDefault,
	FormDefault,
	InputDefault
} from "./style";

const ProfileInfo = () => {
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [gender, setGender] = useState("");
	const [studyField, setStudyField] = useState("");
	const username = localStorage.getItem("username");
	const token = localStorage.getItem("token");
	const uid = localStorage.getItem("uid");

	const fetchEmailData = async () => {
		try {
			const response = await newRequest.post("/users/getUser", {
				username
			});
			const email = response.data.user.email;
			setEmail(email);
		} catch (error) {
			console.err(error.message);
		}
	};

	const fetchCountryData = async () => {
		try {
			const response = await newRequest.post("/users/getuserprofile", {
				uid,
				token
			});
			if (response.statusText !== "OK") {
				throw new Error("Session has timed out, please login again.");
			}
			const data = response.data.user;
			setCountry(data.country);
			setGender(data.gender);
			setStudyField(data.study_field);
		} catch (error) {
			console.err(error.message);
		}
	};

	console.log(gender);
	console.log(country);
	console.log(studyField);

	const countryUpdateHandler = (e) => {
		setCountry(e.target.value);
	};
	const countrySubmitHandler = async (e) => {
		e.preventDefault();
		const response = await newRequest.put("/users/userProfile", {
			uid,
			token,
			country
		});
		console.log(response);
		setTimeout(() => {
			window.location.reload(false);
		}, 2000);
	};

	const studyUpdateHandler = (e) => {
		setCountry(e.target.value);
	};
	const studySubmitHandler = async (e) => {
		e.preventDefault();
		const response = await newRequest.put("/users/userprofile", {
			uid,
			token,
			studyField
		});
		console.log(response);
		setTimeout(() => {
			window.location.reload(false);
		}, 2000);
	};

	const genderUpdateHandler = (e) => {
		setGender(e.target.value);
	};
	const genderSubmitHandler = async (e) => {
		e.preventDefault();
		const response = await newRequest.put("/users/userprofile", {
			uid,
			token,
			gender
		});
		console.log(response);
		setTimeout(() => {
			window.location.reload(false);
		}, 2000);
	};

	useEffect(() => {
		fetchEmailData();
		fetchCountryData();
	}, []);
	return (
		<InformationCard title="Personal Information" headStyle={{ color: "#2F71DA", fontWeight: 700, fontSize: "1.4rem", textAlign: "start" }}>
			{/* email */}
			<Email emailValue={email} username={username} uid={uid}/>
			{/* country */}
			<FormDefault htmltype="submit">
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#2F71DA" }} htmlFor="country">Country</label>
					<InputDefault id="country" autoComplete="off" placeholder={country} onChange={countryUpdateHandler}/>
				</FormDefault.Item>
				<FormDefault.Item>
					<ButtonDefault type="primary" onClick={countrySubmitHandler}>
          Change
					</ButtonDefault>
				</FormDefault.Item>
			</FormDefault>

			<FormDefault htmltype="submit">
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#2F71DA" }} htmlFor="country">Gender</label>
					<InputDefault id="country" autoComplete="off" placeholder={gender} onChange={genderUpdateHandler}/>
				</FormDefault.Item>
				<FormDefault.Item>
					<ButtonDefault type="primary" onClick={genderSubmitHandler}>
          Change
					</ButtonDefault>
				</FormDefault.Item>
			</FormDefault>

			<FormDefault htmltype="submit">
				<FormDefault.Item>
					<label style={{ display: "block", textAlign: "start", color: "#2F71DA" }} htmlFor="country">Study Field</label>
					<InputDefault id="country" autoComplete="off" placeholder={studyField} onChange={studyUpdateHandler}/>
				</FormDefault.Item>
				<FormDefault.Item>
					<ButtonDefault type="primary" onClick={studySubmitHandler}>
          Change
					</ButtonDefault>
				</FormDefault.Item>
			</FormDefault>
		</InformationCard>
	);
};

export default ProfileInfo;
