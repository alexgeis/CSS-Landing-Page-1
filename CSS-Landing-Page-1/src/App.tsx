import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<Hero />
			<InfoSection />
			<Footer />
		</>
	);
}

export default App;
