import { Input, Form, Button, Col, Row } from "antd";
import {
	Item,
	ButtonSection,
	HeaderSection,
	ProfileContainer,
	PrimaryColorHelper,
	CancelButton
} from "./style";

const ProfileInfo = () => {
	const email = "louis_12gmail.com";
	const since = "20 Feb, 2023";
	const gender = "Male";
	const expiry = "21 Mar, 2023";
	const paymentMethod = "Visa - 1221";
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
							<Item>{since}</Item>
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
							<Item>{gender}</Item>
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
							<Item>China</Item>
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
				</Form>

				<ButtonSection>
					<Button htmlType="submit" type="primary" size="small">
            Save
					</Button>
					<CancelButton htmlType="button" type="default" size="small">
            Cancel
					</CancelButton>
				</ButtonSection>
			</ProfileContainer>
		</>
	);
};

export default ProfileInfo;
