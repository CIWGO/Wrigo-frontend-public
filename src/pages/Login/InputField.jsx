import { Form, Input } from "antd";

const InputField = (props) => {
	return (
		<Form.Item
			name={ props.name}
			// label="Username"
			rules={[
				{
					required: true,
					message: props.errorMessages
				}
			]}
		>
			<Input type={ props.name} placeholder={props.placeholder } />
		</Form.Item>);
};

export default InputField;
