// Import necessary modules and components
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
// import { BlurView } from "expo-blur";

// Define the Footer functional component
const Footer = ({}) => {
	// Render the Footer component
	return (
		<View style={styles.footer}>
			<View style={styles.separator} />
		</View>
	);
};

// Export the Footer component
export default Footer;

// Styles for the component
const styles = StyleSheet.create({
	footer: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "space-between",
		left: 0,
		right: 0,
		backgroundColor: "white",
		//zIndex: 10,
		bottom: 0,
		height: "7%",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
	},
	separator: {
		height: 1,
		backgroundColor: "#111111",
		width: "100%",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		hight: "100%",
		padding: 15,
		borderRadius: 20,
	},
});
