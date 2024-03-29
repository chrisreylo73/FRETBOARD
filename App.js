import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Fretboard from "./components/Fretboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
	const [lookup, setLookup] = useState("0-0-0-0-0-0");
	const [chordName, setChordName] = useState([]);

	const fetchChordInfo = async (strings) => {
		try {
			const response = await axios.get(`https://api.uberchord.com/v1/chords?voicing=${strings}`);
			// Handle the response data
			const chordName = response.data[0].chordName;
			const res = await axios.get(`https://api.uberchord.com/v1/chords?nameLike=${chordName}`);

			console.log(chordName);
			let chordNameArray = chordName.split(",").filter((item) => item !== "");
			console.log(chordNameArray);
			setChordName(chordNameArray);
			//console.log(res.data);
		} catch (error) {
			console.error("Error fetching chord information:", error.message);
		}
	};

	useEffect(() => {
		fetchChordInfo(lookup);
	}, [lookup]);

	const getAllStrings = () => {};

	// X-3-2-X-1-0
	// X 3 2 0 1 0

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
				<Fretboard lookup={lookup} setLookup={setLookup} />
			</ScrollView>
			<Footer lookup={lookup} chordName={chordName} fetchChordInfo={fetchChordInfo} />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#4f0c16",
		alignItems: "center",
		justifyContent: "center",
	},
	scrollContainer: {
		flexGrow: 1,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	fretboard: {
		backgroundColor: "grey",
		height: 2000,
		width: 280,
		flex: 0, // Set flex to 0 to make it a fixed size
	},
});
