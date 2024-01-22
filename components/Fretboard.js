import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Fretboard = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.stringNames}>
				<Text>E</Text>
				<Text>A</Text>
				<Text>D</Text>
				<Text>G</Text>
				<Text>B</Text>
				<Text>E</Text>
			</View>

			<View style={[styles.fret, { height: 80 }]}>
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 78 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 76 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 74 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 72 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 70 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 68 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 66 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 64 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 62 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 60 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 58 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 56 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 54 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 52 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 50 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 48 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 46 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 44 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
			<View style={[styles.fret, { height: 42 }]}>
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
				<View style={styles.stringsContainer}>
					<View style={[styles.string, { width: 7 }]}></View>
					<View style={[styles.string, { width: 6 }]}></View>
					<View style={[styles.string, { width: 5 }]}></View>
					<View style={[styles.string, { width: 4 }]}></View>
					<View style={[styles.string, { width: 3 }]}></View>
					<View style={[styles.string, { width: 2 }]}></View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Fretboard;

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		// backgroundColor: "grey",
		// height: 500,
		width: 280,
		elevation: 5,
		marginBottom: 100,
		borderRadius: 5,
		flex: 1,
	},
	fret: {
		width: "100%",
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
