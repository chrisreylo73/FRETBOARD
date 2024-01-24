// Import necessary modules and components
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
// import { BlurView } from "expo-blur";

// Define the Footer functional component
const Footer = ({ lookup, fetchChordInfo, chordName }) => {
	// Render the Footer component
	return (
		<View style={styles.footer}>
			{/* <TouchableOpacity style={styles.button} onPress={() => fetchChordInfo(lookup)}>
				<Text>RESULTS</Text>
			</TouchableOpacity> */}
			<View style={styles.nameContainer}>
				<Text style={styles.text}>{chordName[0]}</Text>
				<Text style={styles.subscript}>{chordName[1] === "E" ? "" : chordName[1]}</Text>
				<Text style={styles.superscript}>{chordName[2]}</Text>
			</View>
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
		justifyContent: "center",
		left: 0,
		right: 0,
		backgroundColor: "#5e1620",
		//zIndex: 10,
		bottom: 0,
		height: "7%",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
		borderRadius: 10,
	},
	separator: {
		height: 1,
		backgroundColor: "#111111",
		width: "100%",
	},
	nameContainer: {
		flexDirection: "row",
		backgroundColor: "#4f0c16",
		alignItems: "center",
		justifyContent: "center",
		width: 140,
		height: 30,
		borderRadius: 10,
	},
	superscript: {
		color: "white",
		position: "relative",
		top: -4, // Adjust the value to fine-tune the vertical positioning
		fontSize: 10,
	},
	subscript: {
		color: "white",
		top: 4,
		fontSize: 12, // Adjust the font size as needed
		textAlignVertical: "bottom", // Adjust the line height as needed
	},
	text: {
		color: "white",
		fontSize: 14,
	},
});
