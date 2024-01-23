import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Fret from "./Fret";

const Fretboard = () => {
	const toRoman = (num) => {
		const romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
		const arabicNumerals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

		let result = "";
		let i = arabicNumerals.length - 1;

		while (num > 0) {
			if (num >= arabicNumerals[i]) {
				result += romanNumerals[i];
				num -= arabicNumerals[i];
			} else {
				i--;
			}
		}

		return result;
	};
	{
	}
	return (
		<SafeAreaView style={styles.container}>
			<View style={[styles.romanNumeralContainer]}>
				<Text style={[styles.romanNumeral, { marginTop: 50 }]}>{toRoman(1)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 60 }]}>{toRoman(2)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 55 }]}>{toRoman(3)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 60 }]}>{toRoman(4)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 50 }]}>{toRoman(5)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 50 }]}>{toRoman(6)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 50 }]}>{toRoman(7)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 45 }]}>{toRoman(8)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 45 }]}>{toRoman(9)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 45 }]}>{toRoman(10)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 40 }]}>{toRoman(11)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 40 }]}>{toRoman(12)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 38 }]}>{toRoman(13)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 34 }]}>{toRoman(14)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 34 }]}>{toRoman(15)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 30 }]}>{toRoman(16)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 30 }]}>{toRoman(17)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 25 }]}>{toRoman(18)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 25 }]}>{toRoman(19)}</Text>
				<Text style={[styles.romanNumeral, { marginTop: 25 }]}>{toRoman(20)}</Text>
			</View>
			<View style={[styles.fretboardContainer]}>
				<View style={styles.stringNames}>
					<Text> E</Text>
					<Text> A</Text>
					<Text>D</Text>
					<Text>G</Text>
					<Text>B</Text>
					<Text>E</Text>
				</View>
				<Fret fretHeight={80} fretNumber={1} />
				<Fret fretHeight={78} includeFretBar={true} fretNumber={2} />
				<Fret fretHeight={76} includeFretBar={true} fretNumber={3} />
				<Fret fretHeight={74} includeFretBar={true} fretNumber={4} />
				<Fret fretHeight={72} includeFretBar={true} fretNumber={5} />
				<Fret fretHeight={70} includeFretBar={true} fretNumber={6} />
				<Fret fretHeight={68} includeFretBar={true} fretNumber={7} />
				<Fret fretHeight={66} includeFretBar={true} fretNumber={8} />
				<Fret fretHeight={64} includeFretBar={true} fretNumber={9} />
				<Fret fretHeight={62} includeFretBar={true} fretNumber={10} />
				<Fret fretHeight={60} includeFretBar={true} fretNumber={11} />
				<Fret fretHeight={58} includeFretBar={true} fretNumber={12} />
				<Fret fretHeight={56} includeFretBar={true} fretNumber={13} />
				<Fret fretHeight={54} includeFretBar={true} fretNumber={14} />
				<Fret fretHeight={52} includeFretBar={true} fretNumber={15} />
				<Fret fretHeight={50} includeFretBar={true} fretNumber={16} />
				<Fret fretHeight={48} includeFretBar={true} fretNumber={17} />
				<Fret fretHeight={46} includeFretBar={true} fretNumber={18} />
				<Fret fretHeight={44} includeFretBar={true} fretNumber={19} />
				<Fret fretHeight={42} includeFretBar={true} fretNumber={20} />
			</View>
			<View style={[styles.romanNumeralContainer]}></View>
		</SafeAreaView>
	);
};

export default Fretboard;

const styles = StyleSheet.create({
	romanNumeral: {
		// marginBottom: 70,
		color: "#FFFFFF",
	},
	romanNumeralContainer: {
		//position: "absolute",
		//marginTop: 50,
		width: 32,
		marginRight: 15,
		// justifyContent: "space-around",
		alignItems: "center",
		// zIndex: 10,
	},
	fretboardContainer: {
		// marginRight: 40,
	},
	container: {
		flexDirection: "row",
		marginTop: 100,
		// backgroundColor: "grey",
		// height: 500,
		// width: 280,
		// elevation: 5,
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
		backgroundColor: "rgba(255, 255, 255, 0.2)",
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
