import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Fret = ({ fretHeight, doubleCircle, singleCircle, includeFretBar, fretNumber }) => {
	return (
		<View style={[styles.fret, { height: fretHeight }]}>
			{includeFretBar === false ? (
				<></>
			) : (
				<View style={styles.fretBar}>
					<View style={styles.stringsContainer}>
						<View style={[styles.string, { width: 7 }]}></View>
						<View style={[styles.string, { width: 6 }]}></View>
						<View style={[styles.string, { width: 5 }]}></View>
						<View style={[styles.string, { width: 4 }]}></View>
						<View style={[styles.string, { width: 3 }]}></View>
						<View style={[styles.string, { width: 2 }]}></View>
					</View>
				</View>
			)}
			{singleCircle === true ? (
				<View style={[styles.singleCircleContainer, { top: 32 - (fretNumber || 0) }]}>
					<View style={styles.singleCircle}></View>
				</View>
			) : (
				<></>
			)}
			{doubleCircle === true ? (
				<View style={[styles.doubleCircleContainer, { top: 32 - (fretNumber || 0) }]}>
					<View style={[styles.singleCircle, { marginLeft: 88, marginRight: 75 }]}></View>
					<View style={styles.singleCircle}></View>
				</View>
			) : (
				<></>
			)}
			<View style={[styles.buttonsContainer, { top: 32 - (fretNumber || 0) }]}>
				<TouchableOpacity style={[styles.button, { marginRight: 3, marginLeft: 2.5 }]}></TouchableOpacity>
				<TouchableOpacity style={[styles.button, { marginRight: 2.5 }]}></TouchableOpacity>
				<TouchableOpacity style={[styles.button, { marginRight: 1.5 }]}></TouchableOpacity>
				<TouchableOpacity style={[styles.button, { marginRight: 1 }]}></TouchableOpacity>
				<TouchableOpacity style={styles.button}></TouchableOpacity>
				<TouchableOpacity style={styles.button}></TouchableOpacity>
			</View>
			<View style={styles.stringsContainer}>
				<View style={[styles.string, { width: 7 }]}></View>
				<View style={[styles.string, { width: 6 }]}></View>
				<View style={[styles.string, { width: 5 }]}></View>
				<View style={[styles.string, { width: 4 }]}></View>
				<View style={[styles.string, { width: 3 }]}></View>
				<View style={[styles.string, { width: 2 }]}></View>
			</View>
		</View>
	);
};

export default Fret;

const styles = StyleSheet.create({
	singleCircle: {
		// position: "absolute",
		backgroundColor: "grey",
		width: 18,
		height: 18,

		borderRadius: 30,
	},
	singleCircleContainer: {
		position: "absolute",
		left: 134.5,
	},
	doubleCircleContainer: {
		position: "absolute",
		flexDirection: "row",
	},
	doubleCircle: {},
	fret: {
		width: 280,
		// width: "100%",
		// height: 40,

		backgroundColor: "#111111",
		marginTop: -0.5,
	},
	stringsContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	string: {
		width: 6,
		height: "100%",
		backgroundColor: "#5a432e",
	},
	buttonsContainer: {
		position: "absolute",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		top: 30,
		zIndex: 10,
	},
	button: {
		backgroundColor: "rgba(255, 255, 255, 0.1)",
		width: 20,
		height: 20,
		borderRadius: 100,
	},
	fretBar: {
		justifyContent: "center",
		alignItems: "flex-start",
		width: "100%",
		height: 5,
		backgroundColor: "#808080",
	},
	stringNames: {
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "white",
		borderTopEndRadius: 5,
		borderTopStartRadius: 5,
		borderWidth: 0,
	},
});
