import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Fretboard from "./components/Fretboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello</Text>
			<Header />
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
				<Fretboard />
			</ScrollView>
			<Footer />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
});
