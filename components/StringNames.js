import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

const StringNames = ({ bigELocation, setBigELocation, aLocation, setALocation, dLocation, setDLocation, gLocation, setGLocation, bLocation, setBLocation, littleELocation, setLittleELocation }) => {
	const [bigEPressed, setBigEPressed] = useState(false);
	const [aPressed, setAPressed] = useState(false);
	const [dPressed, setDPressed] = useState(false);
	const [gPressed, setGPressed] = useState(false);
	const [bPressed, setBPressed] = useState(false);
	const [littleEPressed, setLittleEPressed] = useState(false);
	useEffect(() => {
		if (bigELocation !== "X") {
			setBigEPressed(false);
		}
		if (aLocation !== "X") {
			setAPressed(false);
		}
		if (dLocation !== "X") {
			setDPressed(false);
		}
		if (gLocation !== "X") {
			setGPressed(false);
		}
		if (bLocation !== "X") {
			setBPressed(false);
		}
		if (littleELocation !== "X") {
			setLittleEPressed(false);
		}
		// console.log(`${bigELocation}-${aLocation}-${dLocation}-${gLocation}-${bLocation}-${littleELocation}`);
	}, [bigELocation, aLocation, dLocation, gLocation, bLocation, littleELocation]);
	const handleBigEClicked = () => {
		if (bigEPressed === true && bigELocation === "X") {
			setBigELocation(0);
		} else {
			setBigELocation("X");
		}
		setBigEPressed(!bigEPressed);
	};

	const handleAClicked = () => {
		if (aPressed === true && aLocation === "X") {
			setALocation(0);
		} else {
			setALocation("X");
		}
		setAPressed(!aPressed);
	};

	const handleDClicked = () => {
		if (dPressed === true && dLocation === "X") {
			setDLocation(0);
		} else {
			setDLocation("X");
		}
		setDPressed(!dPressed);
	};

	const handleGClicked = () => {
		if (gPressed === true && gLocation === "X") {
			setGLocation(0);
		} else {
			setGLocation("X");
		}
		setGPressed(!gPressed);
	};

	const handleBClicked = () => {
		if (bPressed === true && bLocation === "X") {
			setBLocation(0);
		} else {
			setBLocation("X");
		}
		setBPressed(!bPressed);
	};

	const handleLittleEClicked = () => {
		if (littleEPressed === true && littleELocation === "X") {
			setLittleELocation(0);
		} else {
			setLittleELocation("X");
		}
		setLittleEPressed(!littleEPressed);
	};

	return (
		<View style={styles.stringNames}>
			<TouchableOpacity style={[{ marginLeft: 15, backgroundColor: bigEPressed === true ? "#FF7F7F" : "white" }, styles.stringName]} onPress={handleBigEClicked}>
				<Text style={[{ color: bigEPressed === true ? "white" : "black" }]}>E</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[{ marginLeft: 28, backgroundColor: aPressed === true ? "#FF7F7F" : "white" }, styles.stringName]} onPress={handleAClicked}>
				<Text style={[{ color: aPressed === true ? "white" : "black" }]}>A</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[{ marginLeft: 28, backgroundColor: dPressed === true ? "#FF7F7F" : "white" }, styles.stringName]} onPress={handleDClicked}>
				<Text style={[{ color: dPressed === true ? "white" : "black" }]}>D</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[{ marginLeft: 26, backgroundColor: gPressed === true ? "#FF7F7F" : "white" }, styles.stringName]} onPress={handleGClicked}>
				<Text style={[{ color: gPressed === true ? "white" : "black" }]}>G</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[{ marginLeft: 26, backgroundColor: bPressed === true ? "#FF7F7F" : "white" }, styles.stringName]} onPress={handleBClicked}>
				<Text style={[{ color: bPressed === true ? "white" : "black" }]}>B</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[{ marginLeft: 25, backgroundColor: littleEPressed === true ? "#FF7F7F" : "white" }, styles.stringName]} onPress={handleLittleEClicked}>
				<Text style={[{ color: littleEPressed === true ? "white" : "black" }]}>E</Text>
			</TouchableOpacity>
		</View>
	);
};

export default StringNames;

const styles = StyleSheet.create({
	stringNames: {
		flexDirection: "row",
		// justifyContent: "space-evenly",
		backgroundColor: "white",
		alignItems: "center",
		borderTopEndRadius: 5,
		borderTopStartRadius: 5,
		borderWidth: 0,
		height: 25,
	},
	stringName: {
		// backgroundColor: "white",
		// justifyContent: "center",
		alignItems: "center",
		width: 20,
		height: 20,
		borderRadius: 10,
	},
});
