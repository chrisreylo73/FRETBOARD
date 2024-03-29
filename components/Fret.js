import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

const Fret = ({ fretHeight, doubleCircle, singleCircle, includeFretBar, fretNumber, bigELocation, setBigELocation, aLocation, setALocation, dLocation, setDLocation, gLocation, setGLocation, bLocation, setBLocation, littleELocation, setLittleELocation }) => {
	const [bigEPressed, setBigEPressed] = useState(false);
	const [aPressed, setAPressed] = useState(false);
	const [dPressed, setDPressed] = useState(false);
	const [gPressed, setGPressed] = useState(false);
	const [bPressed, setBPressed] = useState(false);
	const [littleEPressed, setLittleEPressed] = useState(false);

	useEffect(() => {
		if (bigELocation !== fretNumber) {
			setBigEPressed(false);
		}
		if (aLocation !== fretNumber) {
			setAPressed(false);
		}
		if (dLocation !== fretNumber) {
			setDPressed(false);
		}
		if (gLocation !== fretNumber) {
			setGPressed(false);
		}
		if (bLocation !== fretNumber) {
			setBPressed(false);
		}
		if (littleELocation !== fretNumber) {
			setLittleEPressed(false);
		}
		// console.log(`${bigELocation}-${aLocation}-${dLocation}-${gLocation}-${bLocation}-${littleELocation}`);
	}, [bigELocation, aLocation, dLocation, gLocation, bLocation, littleELocation]);

	const handleBigEClicked = () => {
		if (bigEPressed === true && bigELocation === fretNumber) {
			setBigELocation(0);
		} else {
			setBigELocation(fretNumber);
		}
		setBigEPressed(!bigEPressed);
	};

	const handleAClicked = () => {
		if (aPressed === true && aLocation === fretNumber) {
			setALocation(0);
		} else {
			setALocation(fretNumber);
		}
		setAPressed(!aPressed);
	};

	const handleDClicked = () => {
		if (dPressed === true && dLocation === fretNumber) {
			setDLocation(0);
		} else {
			setDLocation(fretNumber);
		}
		setDPressed(!dPressed);
	};

	const handleGClicked = () => {
		if (gPressed === true && gLocation === fretNumber) {
			setGLocation(0);
		} else {
			setGLocation(fretNumber);
		}
		setGPressed(!gPressed);
	};

	const handleBClicked = () => {
		if (bPressed === true && bLocation === fretNumber) {
			setBLocation(0);
		} else {
			setBLocation(fretNumber);
		}
		setBPressed(!bPressed);
	};

	const handleLittleEClicked = () => {
		if (littleEPressed === true && littleELocation === fretNumber) {
			setLittleELocation(0);
		} else {
			setLittleELocation(fretNumber);
		}
		setLittleEPressed(!littleEPressed);
	};

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
				<View style={[styles.singleCircleContainer, { top: 35 - (fretNumber || 0), marginLeft: 2 }]}>
					<View style={styles.singleCircle}></View>
				</View>
			) : (
				<></>
			)}
			{doubleCircle === true ? (
				<View style={[styles.doubleCircleContainer, { top: 35 - (fretNumber || 0) }]}>
					<View style={[styles.singleCircle, { marginLeft: 90, marginRight: 78 }]}></View>
					<View style={styles.singleCircle}></View>
				</View>
			) : (
				<></>
			)}
			<View style={[styles.buttonsContainer, { top: 32 - (fretNumber || 0) }]}>
				<TouchableOpacity style={[styles.button, { marginRight: 3, marginLeft: 2.5, backgroundColor: bigEPressed === true ? "white" : "rgba(255, 255, 255, 0.1)" }]} onPress={handleBigEClicked}></TouchableOpacity>
				<TouchableOpacity style={[styles.button, { marginRight: 2.5, backgroundColor: aPressed === true ? "white" : "rgba(255, 255, 255, 0.1)" }]} onPress={handleAClicked}></TouchableOpacity>
				<TouchableOpacity style={[styles.button, { marginRight: 1.5, backgroundColor: dPressed === true ? "white" : "rgba(255, 255, 255, 0.1)" }]} onPress={handleDClicked}></TouchableOpacity>
				<TouchableOpacity style={[styles.button, { marginRight: 1, backgroundColor: gPressed === true ? "white" : "rgba(255, 255, 255, 0.1)" }]} onPress={handleGClicked}></TouchableOpacity>
				<TouchableOpacity style={[styles.button, { backgroundColor: bPressed === true ? "white" : "rgba(255, 255, 255, 0.1)" }]} onPress={handleBClicked}></TouchableOpacity>
				<TouchableOpacity style={[styles.button, { backgroundColor: littleEPressed === true ? "white" : "rgba(255, 255, 255, 0.1)" }]} onPress={handleLittleEClicked}></TouchableOpacity>
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
		width: 15,
		height: 15,
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
