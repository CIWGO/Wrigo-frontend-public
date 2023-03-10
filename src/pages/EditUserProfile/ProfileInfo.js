import { useState, useEffect } from "react";
import { Input, Form, Button, Col, Row } from "antd";
import axios from "axios";
import {
	Item,
	ButtonSection,
	HeaderSection,
	ProfileContainer,
	PrimaryColorHelper,
	CancelButton
} from "./style";

const ProfileInfo = () => {
	// const [hideLoader, setHideLoader] = useState(false);
	const [profile, setProfile] = useState({});
	const email = "louis_12gmail.com";
	// const since = "20 Feb, 2023";
	const expiry = "21 Mar, 2023";
	const paymentMethod = "Visa - 1221";
	const url = "http://localhost:3005/users/getuserprofile";
	// const token = localStorage.getItem("token");
	const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InppemhlbiIsInVpZCI6IjkwZTllMjcwLTE3NWQtNDA2Yi1hZjBiLTViOWZjYTAyNDA0NSIsImVtYWlsIjoieml6aGVubHVvMjMyOEBnbWFpbC5jb20iLCJpYXQiOjE2Nzg0MzE3NDcsImV4cCI6MTY3ODQzNTM0N30.4ojOw35I7_8-lBJQ2z6sfH4LgYQFEdWr9rA0huTR128";
	const uid = "90e9e270-175d-406b-af0b-5b9fca024045";
	useEffect(() => {
		const getData = async () => {
			const response = await axios.post(url, {
				uid,
				token
			});
			const user = response.data.user;
			console.log(user);
			setProfile(user);
		};
		getData();
	}, []);

	return (
		<>
			<ProfileContainer>
				<HeaderSection>
					<h2>Edit Profile Details</h2>
				</HeaderSection>
				<Form>
					<Row gutter={[0, 16]}>
						{/* Email Row */}
						<Col span={8}>
							<Item>
								<PrimaryColorHelper> Email:</PrimaryColorHelper>
							</Item>
						</Col>
						<Col span={12}>
							<Item>{email}</Item>
						</Col>
						<Col span={4}>
							<Item>
								<Button type="default" size="small">
                  Update
								</Button>
							</Item>
						</Col>
						{/* Password Row */}
						<Col span={8}>
							<Item>
								<PrimaryColorHelper> Password:</PrimaryColorHelper>
							</Item>
						</Col>
						<Col span={6}>
							<Item>
								<Input.Password size="small" placeholder="Current Password" />
							</Item>
						</Col>
						<Col span={6}>
							<Item>
								<Input.Password size="small" placeholder="New Password" />
							</Item>
						</Col>
						<Col span={4}>
							<Item>
								<Button type="default" size="small">
                  Change
								</Button>
							</Item>
						</Col>
						{/* User Since Row */}
						<Col span={8}>
							<Item>
								<PrimaryColorHelper>User Since:</PrimaryColorHelper>
							</Item>
						</Col>
						<Col span={12}>
							<Item>{profile.birth}</Item>
						</Col>
						<Col span={4}>
							<Item />
						</Col>
						{/* Gender Row */}
						<Col span={8}>
							<Item>
								<PrimaryColorHelper>Gender</PrimaryColorHelper>
							</Item>
						</Col>
						<Col span={12}>
							<Item>{profile.gender}</Item>
						</Col>
						<Col span={4}>
							<Item />
						</Col>
						{/* Country Row */}
						<Col span={8}>
							<Item>
								<PrimaryColorHelper>Country:</PrimaryColorHelper>
							</Item>
						</Col>
						<Col span={12}>
							<Item>{profile.country}</Item>
						</Col>
						<Col span={4}>
							<Item />
						</Col>
						{/* Subscription expiry Row */}
						<Col span={8}>
							<Item>
								<PrimaryColorHelper>Subscription expiry:</PrimaryColorHelper>
							</Item>
						</Col>
						<Col span={12}>
							<Item>{expiry}</Item>
						</Col>
						<Col span={4}>
							<Item>
								<Button type="default" size="small">
                  Cancel
								</Button>
							</Item>
						</Col>
						{/* Payment Method Row */}
						<Col span={8}>
							<Item>
								<PrimaryColorHelper>payment Method:</PrimaryColorHelper>
							</Item>
						</Col>
						<Col span={12}>
							<Item>{paymentMethod}</Item>
						</Col>
						<Col span={4}>
							<Item>
								<Button type="default" size="small">
                  Edit
								</Button>
							</Item>
						</Col>
					</Row>

					<ButtonSection>
						<Button htmlType="submit" type="primary" size="small">
              Save
						</Button>
						<CancelButton htmlType="button" type="default" size="small">
              Cancel
						</CancelButton>
					</ButtonSection>
				</Form>
			</ProfileContainer>
		</>
	);
};

export default ProfileInfo;
