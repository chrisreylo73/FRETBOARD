import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Fretboard from "./components/Fretboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
	const fetchChordInfo = async (chordName) => {
		try {
			const response = await axios.get(`https://api.uberchord.com/v1/chords/${chordName}`);
			// Handle the response data
			const chordInfo = response.data;
			console.log(chordInfo);
		} catch (error) {
			console.error("Error fetching chord information:", error.message);
		}
	};

	useEffect(() => {
		fetchChordInfo("C");
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
				<Fretboard />
			</ScrollView>
			<Footer />
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
