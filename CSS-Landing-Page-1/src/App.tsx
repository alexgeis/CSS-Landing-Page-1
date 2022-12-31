import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InfoSection } from "./components/InfoSection";
import { QuoteSection } from "./components/QuoteSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<InfoSection />
			<QuoteSection />
			<CtaSection />
			<Footer />
		</>
	);
}

export default App;
