import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Fretboard from "./components/Fretboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hello</Text>
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
