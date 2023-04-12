const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100vh"
	},
	header: {
		padding: "1% 10%"
	},
	infiniteTop: {
		display: "flex",
		justifyContent: "start"
	},
	iconCross: {
		display: "flex",
		justifyContent: "end"
	},
	title: {
		color: "#2f71da",
		fontFamily: "Roboto",
		fontSize: "3.6rem",
		fontWeight: 700,
		lineHeight: "65px",
		letterSpacing: 0,
		textAlign: "left",
		marginTop: 0
	},
	subtitle: {
		fontFamily: "Roboto",
		fontSize: "1.8rem",
		fontWeight: 700,
		lineHeight: "2.4rem",
		letterSpacing: 0,
		textAlign: "left",
		marginBottom: "10px"
	},
	main: {
		padding: "1% 10%"
	},
	infiniteContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	freeTier: {
		h3: {
			fontSize: "2.4rem",
			fontWeight: 700,
			color: "#2f71da",
			marginTop: 0,
			marginBottom: "10px",
			textAlign: "start"
		},
		h5: {
			fontWeight: 600,
			color: "#2f71da",
			fontSize: "1.8rem",
			margin: "10px 0"
		},
		p: {
			margin: 0,
			fontWeight: 500,
			fontSize: "1.8rem",
			lineHeight: "2.5rem"
		}
	},
	tierTitle: {
		fontSize: "2.4rem",
		fontWeight: 700,
		color: "#2f71da",
		marginTop: 0,
		marginBottom: "10px"
	},
	tierPrice: {
		fontWeight: 600,
		color: "#2f71da",
		fontSize: "1.8rem",
		margin: "10px 0"
	},
	tierText: {
		margin: 0,
		fontWeight: 500,
		fontSize: "1.8rem",
		lineHeight: "2.5rem"
	},
	line: {
		border: "1px solid #2f71da",
		marginBottom: "20px"
	},
	wrigoInfinite: {
		display: "flex",
		flexDirection: "column"
	},
	footer: {
		display: "flex",
		justifyContent: "center",
		marginTop: "10px"
	},
	subWrigoInfinite: {
		button: {
			color: "#fff",
			boxSizing: "border-box",
			background: "#2f71da",
			borderRadius: "10px",
			padding: "15px 30px",
			justifyContent: "center",
			fontWeight: 700
		}
	}
};

export default styles;
