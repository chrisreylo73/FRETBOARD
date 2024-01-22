import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Fretboard = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={[styles.fret, { height: 80 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 77 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 74 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 71 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 68 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 65 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 62 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 59 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 56 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 53 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 50 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 47 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 44 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 41 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 38 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 35 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 32 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 29 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 26 }]}>
				<View style={styles.fretBar}></View>
			</View>
			<View style={[styles.fret, { height: 21 }]}>
				<View style={styles.fretBar}></View>
			</View>
		</SafeAreaView>
	);
};

export default Fretboard;

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		backgroundColor: "grey",
		// height: 500,
		width: 280,
		elevation: 5,
		marginBottom: 100,
	},
	fret: {
		width: "100%",
		height: 40,
		backgroundColor: "#111111",
	},
	fretBar: {
		justifyContent: "center",
		alignItems: "flex-start",
		width: "100%",
		height: 5,
		backgroundColor: "#5a432e",
	},
});
