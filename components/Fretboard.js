import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import Fret from "./Fret";

const Fretboard = () => {
	const [bigELocation, setBigELocation] = useState(0);
	const [aLocation, setALocation] = useState(0);
	const [dLocation, setDLocation] = useState(0);
	const [gLocation, setGLocation] = useState(0);
	const [bLocation, setBLocation] = useState(0);
	const [littleELocation, setLittleELocation] = useState(0);
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
					<Text>A</Text>
					<Text>D</Text>
					<Text>G</Text>
					<Text>B</Text>
					<Text>E</Text>
				</View>
				<Fret fretHeight={80} includeFretBar={false} fretNumber={1} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={78} fretNumber={2} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={76} singleCircle={true} fretNumber={3} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={74} fretNumber={4} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={72} singleCircle={true} fretNumber={5} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={70} fretNumber={6} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={68} singleCircle={true} fretNumber={7} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={66} fretNumber={8} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={64} singleCircle={true} fretNumber={9} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={62} fretNumber={10} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={60} fretNumber={11} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={58} doubleCircle={true} fretNumber={12} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={56} fretNumber={13} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={54} fretNumber={14} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={52} singleCircle={true} fretNumber={15} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={50} fretNumber={16} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={48} singleCircle={true} fretNumber={17} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={46} fretNumber={18} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={44} singleCircle={true} fretNumber={19} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
				<Fret fretHeight={42} fretNumber={20} bigELocation={bigELocation} setBigELocation={setBigELocation} aLocation={aLocation} setALocation={setALocation} dLocation={dLocation} setDLocation={setDLocation} gLocation={gLocation} setGLocation={setGLocation} bLocation={bLocation} setBLocation={setBLocation} littleELocation={littleELocation} setLittleELocation={setLittleELocation} />
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
